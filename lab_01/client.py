import threading
from socket import socket, AF_INET, SOCK_DGRAM, gaierror
from time import sleep

import simplejson


class ChatClient:
    def __init__(self, address, login):
        try:
            self.__sock = socket(AF_INET, SOCK_DGRAM)
            self.__sock.connect(address)
            self.__connected = True
            self.__last_msg_time = 0
            self.__last_id = 0
        except gaierror:
            raise Exception('Can not connect to the server')

        self.__login = login

    def send(self, message):
        if not self.__connected:
            raise Exception('Is not connected to server')

        params = {
            'action': 'send',
            'login': self.__login,
            'message': message,
        }

        data = simplejson.dumps(params).encode('utf-8')
        self.__sock.send(data)

    def get(self):
        if not self.__connected:
            raise Exception('Is not connected to server')

        params = {
            'action': 'get',
            'start_id': self.__last_id,
        }

        data = simplejson.dumps(params).encode('utf-8')
        self.__sock.send(data)

        response = simplejson.loads(self.__sock.recv(8192))
        messages = [m for m in response['messages']
                    if m['login'] != self.__login and float(m['time']) > self.__last_msg_time]
        self.__last_id = int(response['last_id'])
        return messages


class MessageGetter(threading.Thread):
    def __init__(self, client, timeout):
        super().__init__()
        self.__client = client
        self.__timeout = timeout
        self.__working = False

    def run(self):
        self.__working = True
        while self.__working:
            messages = client.get()
            if messages:
                print()
                for message in messages:
                    print('[{login}] {text}'.format(**message))
            sleep(self.__timeout)

    def terminate(self):
        self.__working = False


if __name__ == '__main__':
    address = 'localhost'  # input('enter server ip-address:')
    port = 20000  # int(input('enter server port:'))
    login = 'alex'  # input('enter login:')
    client = ChatClient((address, port), login)

    message_getter = MessageGetter(client, 1)
    message_getter.start()

    while True:
        user_input = input('> ')
        if user_input == 'exit':
            message_getter.terminate()
            break
        client.send(user_input)
