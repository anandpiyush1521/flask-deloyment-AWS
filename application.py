from flask import Flask

application = Flask(__name__)
app = application


@application.route("/")
def home():
    return "<h1>hello world! Flask Deployment is completed</h1>"


if __name__ == "__main__":
    application.run(debug=True)