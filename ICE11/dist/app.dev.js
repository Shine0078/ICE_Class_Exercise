"use strict";

//Name: Samuel Abraham
//ICE11
// INFT2202
var express = require('express');

var pug = require('pug');

var user = require('./routes/user.route');

require('dotenv').config(); // initialize method


var app = express(); // use port from env or default to 3000 if not set

var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
  extended: false
})); // configure routes

app.use('/', user); // setup template engine

app.set("views", "".concat(__dirname, "/views"));
app.set("view engine", "pug"); // Listent on port

app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
