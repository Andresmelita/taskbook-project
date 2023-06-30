import click
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/users/*": {"origins": "*"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/tasks.db'
db = SQLAlchemy(app)

@app.route('/')
def home():
    return 'Hello World'

@app.route('/users', methods=['GET'])
def users():
    return {'users': [{'userId': 1, 'id': 1, 'title': 'titulo 1', 'body': 'descripción 1'}, {'userId': 2, 'id': 2, 'title': 'titulo 2', 'body': 'descripción 2'}, {'userId': 3, 'id': 3, 'title': 'titulo 3', 'body': 'descripción 3'}]}

#decorar las funciones con @with_appcontext si requieren acceso al contexto de la aplicación Flask.
#definir comando personalizado
@app.cli.command()
def createdb():
    """Create the database tables."""
    db.create_all()
    click.echo('Database created!')

if __name__ == '__main__':
    app.run(debug=True)