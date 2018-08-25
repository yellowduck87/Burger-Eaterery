var express = require("express");
var bodyParser = require("body-parser");
var router = require("./controllers/burger_controllers.js");


var PORT = process.env.PORT || 3000;

var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(router);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT)
});