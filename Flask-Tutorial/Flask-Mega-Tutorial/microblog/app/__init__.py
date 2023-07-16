from flask import Flask
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

from app import routes  # needs the app variable, so has to be imported down here