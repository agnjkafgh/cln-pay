var express = require("express");
var path = require("path");
var logger = require("morgan");
var http = require('http');

const port = 3000;

// Import routes
var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
// App Routes
app.use("/api", apiRouter);
app.use("/", indexRouter);

app.set('port', port);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // Embedded Javascript templates

var server = http.createServer(app);
server.listen(port, ()=> console.log("Listening on Port " + port));

module.exports = app;
