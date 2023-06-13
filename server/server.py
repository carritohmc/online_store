from flask import Flask, request, abort
from config import db
import json
from bson import ObjectId


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
    
    # there should be a title that has at least 2 characters
    if "title" not in product or len(product["title"]) < 3:
        return abort(400, "Invalid title")

    if "category" not in product or len(product["category"]) < 1: 
        return abort(400, "Product must have a category")

    if "image" not in product or len(product["image"]) < 1: 
        return abort(400, "Product must have a image")
    
    if "price" not in product: 
        return abort(400, "Product must have a price")

    if not isinstance(product["price"],(int, float)): 
        return abort(400, "price must be a number")

    if not product["price"] > 0:
        return abort(400, "price must be greater than 0")


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


@app.get("/api/products/category/<cat>")
def get_prods_by_category(cat):
    products = []
    cursor = db.products.find({"category":cat})
    for prod in cursor:
        products.append(fix_id(prod))

    return json.dumps(products)

@app.get("/api/products/search/<text>")
def get_prods_by_title(text):
    products = []
    cursor =db.products.find({"title":{"$regex":text, "$options":"i"}})
    for prod in cursor:
        products.append(fix_id(prod))

    return json.dumps(products)

@app.get("/api/product/<id>")
def get_prod_by_id(id):
    if not ObjectId.is_valid(id):
        return abort(400, "Invalid id")

    db_id=ObjectId(id)
    product=db.products.find_one({"_id":db_id})
    if product is None:
        return abort(404,"No product found for given id")


    return json.dumps(fix_id(product))





#####################################################
############### Coupons ###############################
###################################################

@app.post("/api/coupons")
def save_coupon():
    # save a new product
    coupon = request.get_json()
    
    # there should be a title that has at least 2 characters
    if "code" not in coupon or len(coupon["code"]) < 3:
        return abort(400, "Invalid coupon code")

    if "discount" not in coupon: 
        return abort(400, "discount must have an amount")

    if not isinstance(coupon["discount"],(int, float)): 
        return abort(400, "discount must be a number")

    if not coupon["discount"] > 0 or not coupon["discount"] < 40:
        return abort(400, "discount must be greater than 0 and less than 40")


    db.coupons.insert_one(coupon)

    print(coupon)
    return json.dumps(fix_id(coupon))

####


@app.get("/api/coupons")
def get_coupons():
    coupons = []
    cursor = db.coupons.find({})
    for prod in cursor:
        coupons.append(fix_id(prod))

    return json.dumps(coupons)    

###########

@app.get("/api/coupons/search/<code>")
def get_coupon_by_code(code):
    coupons = []
    cursor =db.coupons.find({"code":{"$regex":code, "$options":"i"}})
    for prod in cursor:
        coupons.append(fix_id(prod))

    return json.dumps(coupons)

#######


app.run(debug=True)

# $regex is for contains and $options: "i" if for case insensitive