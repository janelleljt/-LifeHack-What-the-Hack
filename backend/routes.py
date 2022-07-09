from multiprocessing import Value
from flask import Flask, request, jsonify, make_response, abort, Response
from flask_cors import CORS
from flask_restful import Api, Resource
from database import Database
import random
import Constants as keys
import requests
import json

'''
Initializing Flask and CORS
'''
app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
# cors = CORS(app, resources={r"*": {"origins": "http://localhost:port"}})
api = Api(app)

'''
Initializing Database
'''
database = Database()

'''
Defining Routes
'''
class Listings(Resource):
    # GET request for ALL listings 
    def get(self):
        all_listings = database.query_all_listings()
        return make_response(jsonify(all_listings), 200)

api.add_resource(Listings, '/api/listings')

