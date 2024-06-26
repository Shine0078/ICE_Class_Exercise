"use strict";

var bcrypt = require('bcrypt');

var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

var connection = require('./database');

var User = connection.User;
var saltRounds = 12; // Strategies are responsible for authenticating requests by implementing an authentication mechanism that defines how to encode a credential, such as a password or an assertion from an identity provider (IdP), in a request.
// We are using a username and password strategy that requires a callback that will check if the user exists and if the password is valid and return true or false
// this uses the req.body.username and password from logging in to find a user and see if the user is valid - authentication
//this is what will trigger a failed login
// trigger successful login
// trigger failed login
//LocalStrategy is a passport.js strategy that allows you to authenticate users based on a username and password. It is used to verify user credentials by checking if the username and password are valid.
// In Passport.js, serializeUser and deserializeUser are two methods that are used to store and retrieve user data from a session. The serializeUser method is used to determine which data of the user object should be stored in the session.
// The result of the serializeUser method is attached to the session as req.session.passport.user = { ~~ serialized user object }.
// The deserializeUser method is used to retrieve the whole object from the session. It should return the full object to be attached to the request as req.user.

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id).then(function (user) {
    done(null, user);
  })["catch"](function (err) {
    done(err, null);
  });
}); // Local stratagy

passport.use(new LocalStrategy({
  usernameField: "username"
}, function (username, password, done) {
  User.findOne({
    username: username
  }).then(function (user) {
    // Create a new user
    if (!user) {
      var newUser = new User({
        username: username,
        password: password
      }); // Hash password before saving in database

      var hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);

      if (hashedPassword) {
        // reasign to user password
        newUser.password = hashedPassword;
        newUser.save().then(function (user) {
          return done(null, user);
        })["catch"](function (err) {
          return done(null, false, {
            message: err
          });
        });
      }
    } else {
      bcrypt.compare(password, user.hashPassword, function (err, isMatch) {
        if (err) {
          done(err, null);
        }

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: "Password was incorrect."
          });
        }
      });
    }
  })["catch"](function (err) {
    return done(null, false, {
      message: err
    });
  });
}));
module.exports = passport;
//# sourceMappingURL=passport.dev.js.map
