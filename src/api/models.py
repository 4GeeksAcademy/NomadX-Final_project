from flask_sqlalchemy import SQLAlchemy 
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    encoded_password = db.Column(db.String(500), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    favorites = db.relationship("Favorite",backref="user",lazy=True)
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "favorite": [fav.serialize() for fav in self.favorites]
            # do not serialize the password, its a security breach
        }

    def set_password(self, password):
        self.encoded_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.encoded_password, password)
    
class Post(db.Model):
    __tablename__ = 'post'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), unique=False, nullable=False)
    comment = db.Column(db.Text, unique=False, nullable=False)
    image_url = db.Column(db.String(1000), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    latitude = db.Column(db.Float, unique=False, nullable=True)
    longitude = db.Column(db.Float, unique=False, nullable=True)
    city_name = db.Column(db.String(150), unique = False, nullable= True)
    rating = db.Column(db.Integer, unique = True, nullable= True)
    user=db.relationship("User", backref="posts", lazy=True)
    country = db.Column(db.String(150), unique = False, nullable= True)

    def __repr__(self):
        return f'<Post {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "comment": self.comment,
            "image_url": self.image_url,
            "user_id": self.user_id,
            "latitude": self.latitude,
            "longitude": self.longitude,
            # do not serialize the password, its a security breach
        }
class Favorite(db.Model):
    __tablename__ = 'favorite'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    post = db.relationship("Post", backref="favorites", lazy=True)

    def __repr__(self):
        return f'<Favorite {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post": self.post.serialize()

            # do not serialize the password, its a security breach
        }

class Login(db.Model):
    __tablename__ = 'login'

    id = db.Column(db.Integer, primary_key=True)
    access_token = db.Column(db.String(500), unique=False, nullable=False)
