from datetime import datetime

from flask import Flask
from sqlalchemy.testing.pickleable import User


def create_app():

    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
    app.config['SECRET_KEY'] = 'REPLACE_ME'

    from .extensions import db
    db.init_app(app)

    from .extensions import migrate
    migrate.init_app(app, db)

    from .extensions import login_manager
    login_manager.init_app(app)

    from .models import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))


    from .main import main
    app.register_blueprint(main)


    return app