from flask import Flask

app = Flask(__name__)

from app import routes  # needs the app variable, so has to be imported down here