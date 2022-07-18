from flask import Flask

application = Flask(__name__)


@application.route("/")
def home():
    return "<h1>hello world</h1>"


if __name__ == "__main__":
    application.run(debug=True)