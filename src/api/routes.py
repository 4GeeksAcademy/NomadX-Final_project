"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token, jwt_required, current_user, get_jwt_identity

# Import the Cloudinary libraries
# ==============================
import cloudinary
from cloudinary import CloudinaryImage
import cloudinary.uploader
import cloudinary.api
import os
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Autentication Routes

@api.route('/sing_up', methods=['POST'])
def create_user():

    email = request.json.get("email", None)
    nickname = request.json.get("nickname", None)
    password = request.json.get("password", None)

    user = User(email = email,nickname = nickname, is_active= True)
    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "User has been created"}), 201

@api.route('/sing_in', methods=['POST'])
def generate_token():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    
    if not user or not user.check_password(password):
        return jsonify("Wrong username or password"), 401
    print(user.id)
    # Notice that we are passing in the actual sqlalchemy user object here
    if user: 
        access_token = create_access_token(identity = str(user.id))
        return jsonify(access_token=access_token)


@api.route('/profile', methods=['GET'])
@jwt_required()
def get_current_user():
    return jsonify(current_user.serialize()),200

#Cloudinary routes

cloudinary.config(
    cloud_name = os.getenv('CLOUD_NAME'),
    api_key = os.getenv('CLOUDINARY_API_KEY'),
    api_secret = os.getenv('CLOUDINARY_API_SECRET'),
    secure = True
)

@api.route('/post', methods=['POST'])
@jwt_required()
def update_posts_image():
    user_id = get_jwt_identity()
    request_body = request.get_json()
    newPost = Post(user_id = user_id, image_url= request_body["image_url"],title = request_body["title"], comment = request_body["comment"])
    db.session.add(newPost)
    db.session.commit()
    return jsonify({"msg":"post created!"}),200

@api.route('/img', methods=["POST"])
def upload_image():
    img = request.files["img"]
    print(img)
    img_url = cloudinary.uploader.upload(img)
    #print(img_url)


    return jsonify({"img": img_url["url"]}), 200
    