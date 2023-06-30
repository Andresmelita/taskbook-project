from app import app

@app.cli.command()
def runserver():
    app.run(debug=True)

if __name__ == '__main__':
    app.run(debug=True)
