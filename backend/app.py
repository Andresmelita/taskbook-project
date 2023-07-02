from flask import Flask, render_template, request, jsonify
import sqlite3
import uuid

app = Flask(__name__)

@app.route("/users", methods=['POST'])
def add_user():
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
            cur.execute("INSERT INTO users (id, name, last_name, email, password) VALUES (?, ?, ?, ?, ?)",
                        (user_id, name, last_name, email, password))
            con.commit()

        response = {"message": "User added successfully"}
        return jsonify(response), 200

    except Exception as e:
        response = {"error": str(e)}
        return jsonify(response), 500


@app.route("/users", methods=['GET'])
def get_users():
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
                'id': row[0],
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


# # Home Page route
# @app.route("/")
# def home():
#     return render_template("home.html")

# # Route to form used to add a new student to the database
# @app.route("/enternew")
# def enternew():
#     return render_template("student.html")

# # Route to add a new record (INSERT) student data to the database
# @app.route("/addrec", methods = ['POST', 'GET'])
# def addrec():
#     # Data will be available from POST submitted by the form
#     if request.method == 'POST':
#         try:
#             nm = request.form['nm']
#             addr = request.form['add']
#             city = request.form['city']
#             zip = request.form['zip']

#             # Connect to SQLite3 database and execute the INSERT
#             with sqlite3.connect('database.db') as con:
#                 cur = con.cursor()
#                 cur.execute("INSERT INTO students (name, addr, city, zip) VALUES (?,?,?,?)",(nm, addr, city, zip))

#                 con.commit()
#                 msg = "Record successfully added to database"
#         except:
#             con.rollback()
#             msg = "Error in the INSERT"

#         finally:
#             con.close()
#             # Send the transaction message to result.html
#             return render_template('result.html',msg=msg)

# # Route to SELECT all data from the database and display in a table
# @app.route('/list')
# def list():
#     # Connect to the SQLite3 datatabase and
#     # SELECT rowid and all Rows from the students table.
#     con = sqlite3.connect("database.db")
#     con.row_factory = sqlite3.Row

#     cur = con.cursor()
#     cur.execute("SELECT rowid, * FROM students")

#     rows = cur.fetchall()
#     con.close()
#     # Send the results of the SELECT to the list.html page
#     return render_template("list.html",rows=rows)

# # Route that will SELECT a specific row in the database then load an Edit form
# @app.route("/edit", methods=['POST','GET'])
# def edit():
#     if request.method == 'POST':
#         try:
#             # Use the hidden input value of id from the form to get the rowid
#             id = request.form['id']
#             # Connect to the database and SELECT a specific rowid
#             con = sqlite3.connect("database.db")
#             con.row_factory = sqlite3.Row

#             cur = con.cursor()
#             cur.execute("SELECT rowid, * FROM students WHERE rowid = " + id)

#             rows = cur.fetchall()
#         except:
#             id=None
#         finally:
#             con.close()
#             # Send the specific record of data to edit.html
#             return render_template("edit.html",rows=rows)

# # Route used to execute the UPDATE statement on a specific record in the database
# @app.route("/editrec", methods=['POST','GET'])
# def editrec():
#     # Data will be available from POST submitted by the form
#     if request.method == 'POST':
#         try:
#             # Use the hidden input value of id from the form to get the rowid
#             rowid = request.form['rowid']
#             nm = request.form['nm']
#             addr = request.form['add']
#             city = request.form['city']
#             zip = request.form['zip']

#             # UPDATE a specific record in the database based on the rowid
#             with sqlite3.connect('database.db') as con:
#                 cur = con.cursor()
#                 cur.execute("UPDATE students SET name='"+nm+"', addr='"+addr+"', city='"+city+"', zip='"+zip+"' WHERE rowid="+rowid)

#                 con.commit()
#                 msg = "Record successfully edited in the database"
#         except:
#             con.rollback()
#             msg = "Error in the Edit: UPDATE students SET name="+nm+", addr="+addr+", city="+city+", zip="+zip+" WHERE rowid="+rowid

#         finally:
#             con.close()
#             # Send the transaction message to result.html
#             return render_template('result.html',msg=msg)

# # Route used to DELETE a specific record in the database
# @app.route("/delete", methods=['POST','GET'])
# def delete():
#     if request.method == 'POST':
#         try:
#              # Use the hidden input value of id from the form to get the rowid
#             rowid = request.form['id']
#             # Connect to the database and DELETE a specific record based on rowid
#             with sqlite3.connect('database.db') as con:
#                     cur = con.cursor()
#                     cur.execute("DELETE FROM students WHERE rowid="+rowid)

#                     con.commit()
#                     msg = "Record successfully deleted from the database"
#         except:
#             con.rollback()
#             msg = "Error in the DELETE"

#         finally:
#             con.close()
#             # Send the transaction message to result.html
#             return render_template('result.html',msg=msg)