from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    nickname = db.Column(db.String(120), unique=True, nullable=False)
    encoded_password = db.Column(db.String(500), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

    def set_password(self, password):
        self.encoded_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.encoded_password, password)
    
class Image(db.Model):
    __tablename__ = 'image'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(200), unique=False, nullable=False)
    user_id = db.Column(Integer, ForeignKey('user.id'))

class Favourite(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(Integer, ForeignKey('user.id'))
    urls = db.Column(db.String(200), ForeignKey('image.url'))

class Login(db.Model):
    __tablename__ = 'login'

    id = db.Column(db.Integer, primary_key=True)
    access_token = db.Column(db.String(500), unique=False, nullable=False)