from app import app  # import app var from app module (init.py)
from app.models import User, Post

app.config['SECRET_KEY']


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Post': Post}