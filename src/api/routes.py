"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post,Favorite
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

@api.route('/sign_up', methods=['POST'])
def create_user():

    email = request.json.get("email", None)
    nickname = request.json.get("nickname", None)
    password = request.json.get("password", None)

    user = User(email = email,nickname = nickname, is_active= True)
    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "User has been created"}), 201

@api.route('/sign_in', methods=['POST'])
def generate_token():
    print("estoyqui" )
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
    user_id= get_jwt_identity()
    current_user = User.query.filter_by(id = user_id).first()
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
    newPost = Post(
        user_id = user_id, 
        image_url= request_body["image_url"],
        title = request_body["title"],
        comment = request_body["comment"],
        latitude = request_body["latitude"], 
        longitude = request_body["longitude"], 
        city_name = request_body["city_name"],
        rating = request_body["rating"],
        country = request_body["country"]
        )
    
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
    
@api.route('/fav', methods = ["POST"])
@jwt_required()
def set_fav():
    user_id = get_jwt_identity()
    post_id = request.json.get("post_id")
    exist = Favorite.query.filter_by(user_id = user_id, post_id = post_id).first()
    if exist : 
        return jsonify({"msg":"ya existe este fav"}),400
    favorite = Favorite(user_id = user_id, post_id = post_id )
    db.session.add(favorite)
    db.session.commit()
    return jsonify({"msg":"favorito agregado correctamente"}),201
    
@api.route('/fav/list', methods=["GET"])
@jwt_required()
def get_favs():
    user_id = get_jwt_identity()
    favorites = Favorite.query.filter_by(user_id=user_id).all()
    fav_posts = [{
        "post_id": fav.post.id,
        "title": fav.post.title,
        "comment": fav.post.comment,
        "image_url": fav.post.image_url,
        "latitude": fav.post.latitude,
        "longitude": fav.post.longitude,
        "user_id": fav.post.user_id
    } for fav in favorites if fav.post]  

    return jsonify({"favorites": fav_posts}), 200



@api.route('/user/post', methods=["GET"])
@jwt_required()
def get_image():
    user_id = get_jwt_identity()
    posts = Post.query.filter_by(user_id = user_id).all() 
    post_list = [post.serialize() for post in posts]
    return jsonify(post_list),200

@api.route('/post', methods=['GET'])
def get_all_posts():
    try:
        posts = Post.query.all()
        return jsonify([post.serialize() for post in posts]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@api.route('/fav/<int:post_id>', methods=["DELETE"])
@jwt_required()
def delete_fav(post_id):
    user_id = get_jwt_identity()
    favorite = Favorite.query.filter_by(user_id=user_id, post_id=post_id).first()
    
    if not favorite:
        return jsonify({"msg": "Favorito no encontrado"}), 404
    
    db.session.delete(favorite)
    db.session.commit()
    
    return jsonify({"msg": "Favorito eliminado correctamente"}), 200

@api.route('/post/<int:post_id>', methods=['DELETE'])
@jwt_required()
def delete_post(post_id):
    user_id = get_jwt_identity()
    post = Post.query.get(post_id)
    
    if not post:
        return jsonify({"msg": "Post not found"}), 404
    
    if post.user_id != user_id:
        return jsonify({"msg": "Unauthorized"}), 403
    
    db.session.delete(post)
    db.session.commit()
    
    return jsonify({"msg": "Post deleted successfully"}), 200

