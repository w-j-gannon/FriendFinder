// dependencies
var express = require("express");
var path = require("path");

// express app
var app = express();

var PORT = process.env.PORT || 3000;

// express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("app/public"));

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
  
// starts server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT "+ PORT);
});
