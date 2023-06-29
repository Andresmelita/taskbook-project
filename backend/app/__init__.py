from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/tasks.db'
db = SQLAlchemy(app)
CORS(app, resources={r"/users/*":{"origins": "http://localhost:"}})
CORS(app)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    description = db.Column(db.String(200))
    done = db.Column(db.Boolean)
    # id_book
    # priority
    # creation

@app.route('/')
def home():
    return 'Hello World'

# @app.route('login', method=['POST'])
# def login():
#     if request.method == 'POST':
#     # print(request.method)
#         print(request.form['email'])
#         print(request.form['password'])
#         return 'Ok'
    # else:
    #     return render_template('auth/login.html')

@cross_origin
@app.route('/users', methods=['GET'])
def users():
    return {'users': [{'userId':1, 'id':1, 'title': 'titulo 1', 'body': 'descripción 1'}, {'userId':2, 'id':2, 'title': 'titulo 2', 'body': 'descripción 2'}, {'userId':3, 'id':3, 'title': 'titulo 3', 'body': 'descripción 3'}]}

@cross_origin
@app.route('/task', methods=['POST'])
def create():
    task = Task(title=request.form['content'], description=request.form['content'], done=False)
    db.session.add(task)
    db.session.commit()
    return 'saved'

if __name__ == '__main__':
    app.run(debug = True, port = 5000)