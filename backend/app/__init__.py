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
import hashlib
import os

app = Flask(__name__)

# Specify the folder path
folder_path = "data"

# Get the absolute path of the database file
db_path = os.path.join(folder_path, 'database.db')

# Connect to the SQLite database using the absolute path
conn = sqlite3.connect(db_path)
CORS(app, origins='http://localhost:3000', supports_credentials=True)

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
            password = hashlib.sha256(data['password'].encode()).hexdigest()

            # Generate an ID for the user
            user_id = str(uuid.uuid4())

            # Connect to SQLite3 database and execute the INSERT
            with sqlite3.connect(db_path) as con:
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
            with sqlite3.connect(db_path) as con:
                cur = con.cursor()
                #? Consider to bypass password 
                # cur.execute("SELECT user_id, name, last_name, email FROM users")
                #? Consider to evaluate on-screen password encryption
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
                    #? Consider for password
                    'password': row[4]
                }
                users.append(user)
            #? View in route database
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
            with sqlite3.connect(db_path) as con:
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
            with sqlite3.connect(db_path) as con:
                cur = con.cursor()
                cur.execute("DELETE FROM users WHERE user_id=?", (user_id,))
                con.commit()

            response = {"message": "User deleted successfully"}
            return jsonify

        except Exception as e:
            response = {"error": str(e)}
            return jsonify(response), 500

#Simulation of token
def generate_token(length=16):
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(length))

@cross_origin
@app.route("/api/v1/login", methods=['POST'])
def login():
    try:
        data = request.get_json()  # Retrieve JSON data from the request body

        # Extract user credentials from the JSON data
        email = data['email']
        password = data['password']

        # Connect to SQLite3 database and execute the SELECT query
        with sqlite3.connect(db_path) as con:
            cur = con.cursor()
            cur.execute("SELECT * FROM users WHERE email = ?", (email))
            user = cur.fetchone()

        if user is None:
            response = {"error": "Invalid email or password"}
            return jsonify(response), 401

        #! Verify the password
        if hashlib.sha256(password.encode()).hexdigest() == user[4]:
            # Generate a token
            token = str(uuid.uuid4())

            # Store the token in the user's record in the database
            with sqlite3.connect(db_path) as con:
                cur = con.cursor()
                cur.execute("UPDATE users SET token = ? WHERE email = ?", (token, email))
                con.commit()

            response = {"token": token}
            return jsonify(response), 200
        else:
            response = {"error": "Invalid email or password"}
            return jsonify(response), 401
        #! detección

    except Exception as e:
        response = {"error": str(e)}
        return jsonify(response), 500

@click.command()
def runserver():
    app.run(debug=True, port='5000')

if __name__ == '__main__':
    runserver()
