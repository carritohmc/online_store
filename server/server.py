from flask import Flask
import json

app = Flask(__name__)

@app.get("/")
def home():
    return "Hello from Flask"

@app.get("/test")
def test():
    return "Hello from test page"

@app.get("/about")
def about():
    me ={"name":"Felix"}
    return json.dumps(me)



app.run(debug=True)