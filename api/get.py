from flask import Flask, render_template
from flask import url_for
from flask_cors import CORS, cross_origin
app = Flask(__name__, static_url_path='/static')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def home():
    return {
        "result": [
            {
            "name": "Richelmy Monteiro",
            "age": 99,
            "username": "richmont"
            },
            {
            "name": "Rusbé",
            "age": 90,
            "username": "rusbe"
            },
            {
            "name": "Tiozão",
            "age": 40,
            "username": "tiozao"
            },
            {
            "name": "AAA",
            "age": 1,
            "username": "aaa"
            },
            {
            "name": "Lol",
            "age": 20,
            "username": "lolol"
            }
        ]
    }

if __name__ == '__main__':
    app.run()