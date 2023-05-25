###dictionaries

user = {
    "username":"Felix",
    "last_name":"Almond",
    "age":39

}

print (user)
print (type(user)) #will tell you the type, in this case it'll say class 'dict' in terminal
print(user["username"] + " " + user["last_name"])

#list (array) called array in js but list in python
number = [1,2,3]
print(number)
#to add a new element
number.append(4)
print(number)

#length
print(len(number)) #the number of items
print(len(user["username"]))#will count the number of characters
print(len(user)) #count the number of keys: i.e: username, last name, age

ages = [32, 74, 20, 69, 52, 26, 31, 77, 43, 73, 51, 57, 19, 79, 40, 34, 27, 23, 21, 44, 53, 55, 24, 36, 41, 47, 78, 46, 68, 75, 49, 83, 61, 60, 29, 56, 67, 17, 70, 81, 87, 38]
#print all ages or all numbers
def exc1():
    for age in ages:
        print(age)

exc1()

def exc2():
    total=0
    for age in ages:
        total=total + age
    print(total)
exc2()

#print all of the numbers greater or equal to 21
#count and print ho0w many users are equal or greater than 21
def exc3():
    total=0
    for age in ages:
        if age > 20 and age <=40:
            print(age)
            total+=1
    print("number of ages greater than 20 and less or equal to 40 is"+str(total))
exc3()