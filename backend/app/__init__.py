import click
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
# from flask_migrate import Migrate

app = Flask(__name__)
CORS(app)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/tasks.db'
db = SQLAlchemy(app)
# migrate = Migrate(app, db)

@app.route('/')
def index():
    return {'status': 'Ok'}

@cross_origin
@app.route('/api/v1/users', methods=['GET'])
def users():
    return {'users': [{'id': 1, 'name': 'Andrés', 'lastName': 'Salazar', 'email': 'carlos.salazar.me@usach.cl', 'password':'Cassette846'}, {'id': 2, 'name': 'Nohelia', 'lastName': 'Rojas', 'email': 'nohelia.rojas2004@gmail.com', 'password':'Prelude9226'}, {'id': 3, 'name': 'Guadalupe', 'lastName': 'Melita', 'email': 'melita.alucema@gmail.com', 'password':'NoteK331'}]}

# @app.cli.command()
# def createdb():
#     db.create_all()
#     click.echo('Database created!')

if __name__ == '__main__':
    app.run(debug=True)