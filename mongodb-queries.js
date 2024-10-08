db.restaurants.find()
db.restaurants.find({}, {restaurant_id: 1,name:1, borough: 1, cuisine:1})
db.restaurants.find({}, {_id: 0, restaurant_id: 1,name:1, borough: 1, cuisine:1})
db.restaurants.find({}, {_id: 0, restaurant_id: 1,name:1, borough: 1, "address.zipcode": 1})
db.restaurants.find({borough: "Bronx"})
db.restaurants.find({borough: "Bronx"}).limit(5)
db.restaurants.find({borough: "Bronx"}).skip(5).limit(5)
db.restaurants.find({"grades.score": {$gt:90}})
db.restaurants.find({"grades":{$elemMatch:{"score":{$gt: 80, $lt: 100}}}})
db.restaurants.find({"address.coord.0": {$lt:-95.754168}})
db.restaurants.find({$and:[{cuisine: {$ne: "American "}},{"grades.score":{$gt:70}},{"address.coord.1":{$lt:-65.754168}}]})
db.restaurants.find({$nor:[{cuisine: "American "},{"grades.score":{$lt:71}},{"address.coord.0": {$gt:-65.754167}}]})  --El valor "American " lleva un espacio al final (por error?)
db.restaurants.find({$and:[{cuisine: {$ne: "American "}},{"grades.grade":"A"},{borough:{$ne: "Brooklyn"}}]}).sort({cuisine: -1})
db.restaurants.find({name:{$regex: "^Wil"}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({name:{$regex: "ces$"}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find( {name:{$regex: "Reg"}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({$and:[{borough: "Bronx"}, {$or:[{cuisine: "American "}, {cuisine: "Chinese"}]}]})
db.restaurants.find({borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({borough:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({"grades.score": {$lt: 10}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({$and: [{cuisine: "Seafood"}, {$nor:[{cuisine: "American "}, {cuisine: "Chinese"}, {name: {$regex:"^Wil"}}]}]}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({$and: [{"grades.grade": "A"}, {"grades.score": 11}, {"grades.date": "2014-08-11T00:00:00Z"}]}, {_id: 0, restaurant_id: 1, name: 1, "grades.grade": 1})
db.restaurants.find({$and: [{"grades.1.grade": "A"}, {"grades.1.score": 9}, {"grades.1.date": "2014-08-11T00:00:00Z"}]}, {_id: 0, restaurant_id: 1, name: 1, "grades.grade": 1})
db.restaurants.find({$and:[{"address.coord.1":{$gt: 42}}, {"address.coord.1":{$lt: 52}}]}, {_id: 0, restaurant_id: 1, name: 1, address: 1})
db.restaurants.find().sort({name:1})
db.restaurants.find().sort({name:-1})
db.restaurants.find().sort({name:-1}, {borough:-1})
db.restaurants.find({"address.street":{$exists: true}})
db.restaurants.find({$and: [{"address.coord.0": {$type: "double"}}, {"address.coord.1": {$type: "double"}}]})
db.restaurants.find({"grades.score": {$mod: [7, 0]}}, {_id: 0, restaurant_id: 1, name: 1, "grades.grade": 1})
db.restaurants.find({name:{$regex: "mon"}}, {_id: 0, name: 1, borough: 1, "address.coord": 1, cuisine: 1})
db.restaurants.find({name:{$regex: "^Mad"}}, {_id: 0, name: 1, borough: 1, "address.coord": 1, cuisine: 1})