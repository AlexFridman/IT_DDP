from functools import namedtuple
from rwlock import RWLock

Message = namedtuple('Message', ['text', 'login', 'time'])


class ChatMessageStore:
    def __init__(self):
        self.__id = 1
        self.__storage = []
        self.__rwlock = RWLock()

    def add_message(self, message):
        self.__rwlock.acquire_write()
        self.__storage.append((self.__id, message))
        self.__id += 1
        self.__rwlock.release()

    def get_messages(self, start_id=0):
        self.__rwlock.acquire_read()
        result = ([message for id_, message in self.__storage if id_ >= start_id], self.__id)
        self.__rwlock.release()

        return result

