from pprint import pprint
from pymongo import MongoClient
import requests
import time

client = MongoClient('mongodb://localhost:27017/')


def main():
    get_mongo_doc('cases', 'customer.cases')
    get_mongo_doc('expectedCases', 'customer.expectedCases')
    get_mongo_doc('mediaReportings', 'mediaReportings.requests')


def delete_databases():
    dbs = ['expectedCases', 'cases', 'mediaReportings']
    for db in dbs:
        client.drop_database(db)
        print('MongoDB dropped: ' + db)

    dbs = client.database_names()
    print('Reamining databases:')
    print(dbs)
    print('\n')


def delete_topics():
    # call Kafka Manager API
    topics = ['expectedCases.customer.change',
              'cases.cases.fulfill',
              'mediaReportings.cases.change']
    for topic in topics:
        kafka_manager_url = 'http://localhost:9000/clusters/dev/topics/delete?t=' + topic
        r = requests.post(kafka_manager_url, data={'topic': topic})
        time.sleep(3)
        print('Kafka topic deleted: ' + topic)
    print('\n')


def create_sample_data():
    sample_urls = [
        'http://localhost:8080/accounts/customers/sample',
        'http://localhost:8080/orders/customers/sample/cases',
        'http://localhost:8080/orders/customers/sample/expectedCases',
        'http://localhost:8080/fulfillment/mediaReportings/sample/process',
        'http://localhost:8080/fulfillment/mediaReportings/sample/ship',
        'http://localhost:8080/fulfillment/mediaReportings/sample/in-transit',
        'http://localhost:8080/fulfillment/mediaReportings/sample/receive']


def get_mongo_doc(db_name, collection_name):
    db = client[db_name]
    collection = db[collection_name]
    pprint(collection.find_one())
    print('\n')


if __name__ == "__main__":
    main()