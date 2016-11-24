from pymongo import MongoClient
import os

class Config(object):
    DEBUG = False;
    TESTING = False;
    SECRET_KEY = os.environ.get('SECRET_KEY','DEFAULT_MMAP_SECRET_KEY');
    DB_HOST = os.environ.get('DB_DEV');
    DB = MongoClient(DB_HOST).get_default_database();

class PROD(Config):
    DEBUG = False
    DB_HOST = os.environ.get('DB_PROD');

class DEV(Config):
    DEBUG = True;

class TEST(Config):
    TESTING = True;
