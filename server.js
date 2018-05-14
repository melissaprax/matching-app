// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//app.use
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require path
app.require("./app/routing/api")(app);
app.require("./app/routing/htmlroutes")(app);

//app listen 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

