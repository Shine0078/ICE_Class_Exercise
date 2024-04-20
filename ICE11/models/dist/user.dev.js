"use strict";

//Name: Samuel Abraham
//ICE11
// INFT2202
var mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise; //  Connect to MongoDB Server using the connection string in the `.env` file.

var conn = process.env.DB_STRING;
console.log(conn);
mongoose.createConnection(conn); // Creates simple schema for a User. 
// The hash and salt are derived from the user's given password when they register

var userSchema = new mongoose.Schema({
  username: String,
  hashPassword: String,
  isAdmin: {
    type: Boolean,
    required: true,
    "default": false
  }
}); // Expose the connection

module.exports.User = mongoose.model('user', userSchema);
//# sourceMappingURL=user.dev.js.map
