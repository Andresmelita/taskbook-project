from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
import sqlite3
import uuid

app = Flask(__name__)
CORS(app)


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


if __name__ == '__main__':
    app.run(debug=True)
