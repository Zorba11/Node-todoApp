var express = require("express");
var toDoController = require("./controllers/toDoController");
var app = express();
var path = require("path");

//set up template engine

app.set("view engine", "ejs");

//static files
// app.use(express.static("./assets"));
app.use("/assets", express.static("assets"));
//fire controllers
toDoController(app);

//listen to port
app.listen(3000);
console.log("you are listening to port 3000");
