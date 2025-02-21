"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token, jwt_required, current_user

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/sing_up', methods=['POST'])
def create_user():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User(email = email, is_active= True)
    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "User has been created"}), 201

@api.route('/sing_in', methods=['POST'])
def generate_token():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).one_or_none()
    
    if not user or not user.check_password(password):
        return jsonify("Wrong username or password"), 401

    # Notice that we are passing in the actual sqlalchemy user object here
    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token)


@api.route('/profile', methods=['GET'])
@jwt_required()
def get_current_user():
    return jsonify(current_user.serialize()),200