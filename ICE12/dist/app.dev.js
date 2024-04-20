"use strict";

var express = require('express');

var session = require('express-session');

var MongoStore = require('connect-mongo');

var mongoose = require('mongoose');

var pug = require('pug');

var passport = require('passport');

require('dotenv').config();

require('./config/passport');

var routes = require('./routes/router.js'); // initialize method


var app = express(); // use port from env or default to 3000 if not set

var PORT = process.env.PORT || 3000;
var MONGO_STRING = process.env.DB_STRING;
mongoose.connect(MONGO_STRING).then(console.log("MongoDB connected ".concat(MONGO_STRING)))["catch"](function (err) {
  return console.log('MongoDB ERROR', err);
});
app.use(express.urlencoded({
  extended: false
})); // Express session

app.use(session({
  secret: "super secret!",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: MONGO_STRING,
    mongooseConnection: mongoose.connection
  })
})); // Passport middleware

app.use(passport.initialize());
app.use(passport.session()); // configure routes

app.use('/', routes); // setup template engine

app.set("views", "".concat(__dirname, "/views"));
app.set("view engine", "pug"); // Listent on port

app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
