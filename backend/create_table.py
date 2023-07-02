import sqlite3

connection = sqlite3.connect('./database/database.db')
print("Connected to database successfully")

connection.execute('''CREATE TABLE users 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    last_name TEXT,
    email TEXT,
    password TEXT)''')
print("Created the 'tasks' table successfully!")

connection.execute('''CREATE TABLE books
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    description TEXT,
    creation DATE,
    color TEXT,
    index_num INTEGER,
    tasks TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id))''')
print("Created the 'books' table successfully!")

connection.execute('''CREATE TABLE tasks
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER,
    title TEXT,
    description TEXT,
    creation DATE,
    state TEXT,
    priority TEXT,
    index_num INTEGER,
    FOREIGN KEY(book_id) REFERENCES books(id))''')
print("Created the 'tasks' table successfully!")

print("Created Database successfully!")

connection.close()
