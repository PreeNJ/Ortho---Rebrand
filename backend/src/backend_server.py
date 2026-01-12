
from flask import Flask
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'default_secret')

@app.route('/')
def home():
    return "Hello from the Python Backend!"

if __name__ == '__main__':
    app.run(debug=True)