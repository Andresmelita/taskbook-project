from flask import Flask, render_template, request, jsonify, make_response
from flask_cors import CORS, cross_origin
# from werkzeug.exceptions import Unauthorized, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timedelta
import click
import random
import string
import sqlite3
import uuid


app = Flask(__name__)


CORS(app, origins='http://localhost:3000', supports_credentials=True)
# db=SQLAlchemy(app)
# CORS(app)


@app.route('/')
def index():
    return {'status': 'Ok'}


@cross_origin
@app.route("/api/v1/users", methods=['POST', 'GET'])
def user():
    if request.method == 'POST':
        try:
            data = request.get_json()  # Retrieve JSON data from the request body

            # Extract user details from the JSON data
            name = data['name']
            last_name = data['last_name']
            email = data['email']
            password = data['password']

            # Generate an ID for the user
            user_id = str(uuid.uuid4())

            # Connect to SQLite3 database and execute the INSERT
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO users (user_id, name, last_name, email, password) VALUES (?, ?, ?, ?, ?)",
                            (user_id, name, last_name, email, password))
                con.commit()

            response = {"message": "User added successfully"}
            return jsonify(response), 200

        except Exception as e:
            response = {"error": str(e)}
            return jsonify(response), 500
    elif request.method == 'GET':
        try:
            # Connect to SQLite3 database and execute the SELECT
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("SELECT * FROM users")
                rows = cur.fetchall()

            # Convert the retrieved data to a list of dictionaries
            users = []
            for row in rows:
                user = {
                    'user_id': row[0],
                    'name': row[1],
                    'last_name': row[2],
                    'email': row[3],
                    'password': row[4]
                }
                users.append(user)

            response = {"users": users}
            return jsonify(response), 200

        except Exception as e:
            response = {"error": str(e)}
            return jsonify(response), 500


@cross_origin
@app.route("/api/v1/users/<user_id>", methods=['PUT', 'DELETE'])
def update_delete_user(user_id):
    if request.method == 'PUT':
        try:
            data = request.get_json()  # Retrieve JSON data from the request body

            # Extract user details from the JSON data
            name = data['name']
            last_name = data['last_name']
            email = data['email']
            password = data['password']

            # Connect to SQLite3 database and execute the UPDATE
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("UPDATE users SET name=?, last_name=?, email=?, password=? WHERE user_id=?",
                            (name, last_name, email, password, user_id))
                con.commit()

            response = {"message": "User updated successfully"}
            return jsonify(response), 200

        except Exception as e:
            response = {"error": str(e)}
            return jsonify(response), 500
    elif request.method == 'DELETE':
        try:
            # Connect to SQLite3 database and execute the DELETE
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("DELETE FROM users WHERE user_id=?", (user_id,))
                con.commit()

            response = {"message": "User deleted successfully"}
            return jsonify

        except Exception as e:
            response = {"error": str(e)}
            return jsonify(response), 500

# Simulation of random token of length 16


def generate_token(length=16):
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(length))


# Connect to the SQLite database
conn = sqlite3.connect('your_database.db')


@cross_origin
@app.route("/api/v1/token", methods=['POST'])
def create_token():
    # Authenticate the user with email and password
    email = request.json.get("email")
    password = request.json.get("password")

    # Perform authentication logic
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()

    if not user or user[1] != password:
        return make_response(
            'Could not verify',
            401,
            {'WWW-Authenticate': 'Basic realm ="User does not exist !!"'}
        )

    # Generate a token
    token = generate_token()

    # Store the token in the database or any other persistent storage
    # ...

    response = {"token": token}
    return jsonify(response), 200

# Establish a connection to the database
conn = sqlite3.connect('your_database.db')


@cross_origin
@app.route('/api/v1/login', methods=['POST'])
def login():
    response = {'message': 'Login successful'}
    return jsonify(response), 200

@click.command()
def runserver():
    app.run(debug=True, port='5000')

if __name__ == '__main__':
    runserver()
