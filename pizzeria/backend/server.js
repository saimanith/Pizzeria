const express = require("express");
const path = require("path");
const mongodb = require("mongodb").MongoClient;
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.get("/", (req, res) => {
  res.send("Hello User");
});

server.get("/pizza", (req, res) => {
  mongodb
    .connect("mongodb://localhost:27017", { useUnifiedTopology: true })
    .then((conn) => {
      const db = conn.db("pizzeria");
      const coll = db.collection("pizza");
      coll
        .find({})
        .toArray()
        .then((docs) => 
          res.send(docs)
        );
    }).catch((err)=>{console.log("DB conn error")})
});
server.get("/ingredients", (req, res) => {
    mongodb.connect("mongodb://localhost:27017", { useUnifiedTopology: true }).then((conn) => {
        const db = conn.db("pizzeria");
        const coll = db.collection("ingredients");
        coll.find({}).toArray().then((docs) => res.send(docs));
    }).catch((err) => { console.log("DB conn error") })
});
server.listen(3100, () => {
  console.log("Server Listening");
});
