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
            "name": "Epaminondas",
            "age": 20,
            "username": "epaepa"
            }
        ]
    }

if __name__ == '__main__':
    app.run()