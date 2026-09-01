from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def index():
    with open('project/static/visits.txt', 'r') as f:
        visits = f.read()
        if visits:
            visits = int(visits)
        else:
            visits = 0
    return render_template('index.html', visits=visits)