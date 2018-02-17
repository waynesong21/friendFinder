// NPM Packages
var express = require ("express");
var bodyParser = require("body-parser");
var path = require("path");

// Initialize
var app = express();
var PORT = process.env.PORT || 8080;

// connection.connect(function(err) {
//     if (err) throw err;
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

app.listen(PORT, function(req, res) {
    console.log("App is listening on port: " + PORT);
});