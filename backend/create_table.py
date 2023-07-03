import sqlite3

# Connect to SQLite3 database
conn = sqlite3.connect('database.db')
print("Connected to database successfully")

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
    CREATE TABLE books
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    description TEXT,
    creation DATE,
    color TEXT,
    index_num INTEGER,
    tasks TEXT,
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
