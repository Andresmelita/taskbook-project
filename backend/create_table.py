import sqlite3
import os

# Specify the folder path
folder_path = "data"

# Create the folder if it doesn't exist
if not os.path.exists(folder_path):
    os.makedirs(folder_path)

# Specify the database file path
db_path = os.path.join(folder_path, "database.db")

# Connect to SQLite3 database
conn = sqlite3.connect(db_path)
print("Connected to the database successfully")

# Create a cursor object to execute SQL commands
cursor = conn.cursor()

# Create a table for users
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        user_id TEXT PRIMARY KEY,
        name TEXT,
        last_name TEXT,
        email TEXT,
        password TEXT
    )
''')
print("Created the 'users' table successfully!")

# Create a table of books
cursor.execute('''
    CREATE TABLE IF NOT EXISTS books
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    description TEXT,
    creation DATE,
    color TEXT,
    index_num INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id))
''')
print("Created the 'books' table successfully!")

# Create a table of tasks
cursor.execute('''
    CREATE TABLE tasks
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER,
    title TEXT,
    description TEXT,
    creation DATE,
    state TEXT,
    priority TEXT,
    index_num INTEGER,
    FOREIGN KEY(book_id) REFERENCES books(id))
''')
print("Created the 'tasks' table successfully!")



# Commit the changes and close the connection
conn.commit()
conn.close()


# connection.execute('''CREATE TABLE users 
#     (id INTEGER PRIMARY KEY AUTOINCREMENT,
#     name TEXT, 
#     last_name TEXT,
#     email TEXT,
#     password TEXT)''')
# print("Created the 'tasks' table successfully!")

# connection.execute('''CREATE TABLE books
#     (id INTEGER PRIMARY KEY AUTOINCREMENT,
#     user_id INTEGER,
#     title TEXT,
#     description TEXT,
#     creation DATE,
#     color TEXT,
#     index_num INTEGER,
#     tasks TEXT,
#     FOREIGN KEY(user_id) REFERENCES users(id))''')
# print("Created the 'books' table successfully!")

# connection.execute('''CREATE TABLE tasks
#     (id INTEGER PRIMARY KEY AUTOINCREMENT,
#     book_id INTEGER,
#     title TEXT,
#     description TEXT,
#     creation DATE,
#     state TEXT,
#     priority TEXT,
#     index_num INTEGER,
#     FOREIGN KEY(book_id) REFERENCES books(id))''')
# print("Created the 'tasks' table successfully!")

# print("Created Database successfully!")

# connection.close()
