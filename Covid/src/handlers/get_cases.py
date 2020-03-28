from pprint import pprint
from pymongo import MongoClient
import requests
import time

def get_mongo_doc(db_name, collection_name):
    db = client[db_name]
    collection = db[collection_name]
    pprint(collection.find_one())
    print('\n')

if __name__ == "__main__":
    main()

def main():
    get_mongo_doc('cases', 'customer.cases')