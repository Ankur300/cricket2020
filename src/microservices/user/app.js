const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { useReducer } = require("react");
var cors = require("cors");


const app = express();

app.use(cors());

app.use((req, res, next) => {
    console.log(req.method);
    next();
});
mongoose.connect("mongodb://localhost:27017/sports2020");
// get reference to DB
const db = mongoose.connection;
var user;
var userSchema;
db.on("error", console.error.bind(console, "Connection Error!"));
db.once("open", () => {
    console.log("Connection Successful");
    //define schema
    userSchema = mongoose.Schema({
        _id: String,
        name: String,
        age: Number,
        sports: String,
        city: String
    });
    // complie schema to model
    user = mongoose.model("User", userSchema, "sports"); // model name, schema name, collection name
    // create document intance
    usr = new user();
});

app.get("/", function (req, res) {
    res.set({ "Allow-access-Allow-Orgin": "*" });
    res.send("hello ");
  });
app.get("/alluser", async (req, res) => {
    await user.find().exec((err, usrinfo) => {
        if (err) {
            console.log("something went worng")
        }
        else {
            console.log(usrinfo)
            res.send(usrinfo)
        }
    })
});

app.get("/search", (req, res,next)=> {  
    const searchedfield=req.query.name;
    user.find({name:{$regex:searchedfield,$options:'$i'}})
    .then(data=>{
        res.send(data);
    })

})
module.exports = app;

