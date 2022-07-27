from flask import Flask, render_template

application = Flask(__name__)
app = application


@application.route("/")
def home():
    return render_template('home.html')

@application.route("/admin")
def index():
    return render_template('admin.html')

@application.route("/view")
def view():
    return render_template('view.html')

@application.route("/donar")
def search_recierver_donar():
    return render_template('Donar.html')

if __name__ == "__main__":
    application.run(debug=True)