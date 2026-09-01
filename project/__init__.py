from datetime import datetime

from flask import Flask, g, request
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

    def increment_visits():
        print("Incrementing")
        with open('project/static/visits.txt', 'w+') as f:
            visits = f.read()
            if visits:
                visits = int(visits)
            else:
                visits = 0
            f.write(f"{visits + 1}")
    @app.before_request
    def before_request():
        g.new_visitor = not(request.cookies.get('site_visited'))

    @app.after_request
    def after_request(response):
        if getattr(g, 'new_visitor', None):
            increment_visits()
            response.set_cookie('site_visited', "1", max_age= 60 * 60 * 24, httponly=True, samesite="Lax")

        return response


    from .main import main
    app.register_blueprint(main)


    return app