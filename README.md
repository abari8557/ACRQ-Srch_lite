<h1>Always do a docker pull before pushing code up</h1>

To create a docker container, run the following in a terminal window

docker-compose -f docker-compose.dev.yaml up -d --build


docker-compose -f docker-compose.dev.yaml up -d --build --no-deps <container_name>


MongoDB syntax

db >> shows current db connected to
show dbs >> shows all dbs
use <db_name> >> switches to db

db.passport.insertOne( {
    "id": 1,
    "first_name": "Gerladina",
    "last_name": "Rene",
    "email": "grene0@rediff.com",
    "gender": "Female",
    "date_of_birth": "02/14/2005",
    "passport_number": "P289624750",
    "address": {
      "city": "Charlottesville",
      "state": "Virginia",
      "country": "United States"
    }
  })
