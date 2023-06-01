from flask import Flask, request
from config import db
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


# API Endpoints

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj

@app.get("/api/version")
def version():
    version ={"name": "mouse", "version" : 35, "build": 2948}
    return json.dumps(version)


@app.get("/api/products")
def get_products():
    products = []
    cursor = db.products.find({})
    for prod in cursor:
        products.append(fix_id(prod))

    return json.dumps(products)    


@app.post("/api/products")
def save_product():
    # save a new product
    product = request.get_json()
    db.products.insert_one(product)

    print(product)
    return json.dumps(fix_id(product))
    
    # mock save
    # products.append(product)
    # return json.dumps(product)

@app.get("/api/reports/total")
def get_total():
    total_products = 0
    total_price=0
    cursor = db.products.find({})
    for prod in cursor:
        total_price += prod["price"]
        total_products+=1
    return json.dumps({"total": total_price, "products" : total_products})


@app.get("/api/reports/categories")
def get_categories():
    categories =[]
    cursor = db.products.find({})
    for cat in cursor:
        categories.append(cat["category"])
    categories.sort()
    return json.dumps(categories)


app.run(debug=True)