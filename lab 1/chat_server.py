from socketserver import ThreadingUDPServer, BaseRequestHandler
from time import time

import simplejson

from chat_message_store import ChatMessageStore, Message


class ChatRequestHandler(BaseRequestHandler):
    message_store = ChatMessageStore()
    supported_actions = ('send', 'get')
    action_params = {
        'get': tuple(),
        'send': ('login', 'message')
    }

    def handle(self):
        data, sock = self.request
        recv_params = simplejson.loads(data)
        action = recv_params.get('action', None)
        if action and action in self.supported_actions and \
                self.validate_params(action, recv_params):
            ChatRequestHandler.__dict__[action](self, sock, **recv_params)

    def validate_params(self, action, params):
        return all(param in params
                   for param in self.action_params[action])

    def send(self, sock, login, message, **kwargs):
        msg = Message(login=login, text=message, time=time())
        self.message_store.add_message(msg)

    def get(self, sock, start_id=0, **kwargs):
        msgs, last_id = self.message_store.get_messages(start_id)
        sock.sendto(simplejson.dumps({'messages': msgs, 'last_id': last_id})\
                    .encode('utf-8'), self.client_address)


if __name__ == '__main__':
    serv = ThreadingUDPServer(('', 20000), ChatRequestHandler)
    serv.serve_forever()
