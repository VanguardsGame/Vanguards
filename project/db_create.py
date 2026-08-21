from werkzeug.security import generate_password_hash
from .extensions import db
from .models import User
from . import create_app

app = create_app()

with app.app_context():
    db.create_all()
    user = User(
        username="Example Name",
        email="Example@Email.com",
        password=generate_password_hash("ExamplePassword")
    )

    db.session.add(user)
    db.session.commit()
    quit()
