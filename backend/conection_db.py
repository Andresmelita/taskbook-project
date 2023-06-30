import sqlite3

try:
    my_conection=sqlite3.connect("database/users.db")
    cursor=my_conection.cursor()
    cursor.execute("CREATE TABLE user (name VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50))")
except Exception as ex:
    print(ex)