//Name: Samuel Abraham
//ICE11
// INFT2202
const { response } = require("express");

const bcrypt = require('bcrypt');

const { model } = require('mongoose');

const model = require("../models/user");

const saltRound = 12;

/**
 * search database to see if username exists
 * @param {*} usernameToFind 
 * @returns 
 */


function userExists(usernameToFind) {
    // HINT use .find() with query selection
    console.log('--TODO: implement userExists');

    User.findOne({username: usernameToFind}).then(function (user) {

        return user;
    })
    .then(console.log)
    .catch((err) => {
        return null;
    });
}



/**
 * renders home view
 * @param {*} req 
 * @param {*} res 
 */
exports.homeView = (req, res) => {
    res.render('home', {
        pageTitle: 'INFT 2202 - Home Page',
    })
}

/**
 * render the login page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: ''
    });
}

/**
 * render the login failure page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLoginFailure = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: 'Username/password combination does not exist. Please try again.'
    });
}

/**
 * render the login success page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLoginSuccess = (req, res, next) => {
    res.render('login-success', {
        pageTitle: '',
        user: { username: req.body.username }
    });
}

/**
 * handle login form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postLogin = (req, res) => {
    let usernameEntry = req.body.username;
    let passwordEntry = req.body.password;
    // check to see if user pass combo exists
    // render either login-failure or login-success
    User.findOne({"username": usernameEntry}).then(function(user) {
        if (user) {
            // Username match, check password hash
            bcrypt.compare(passwordEntry, user.hashPassword, function(err, result) {
                if (err == null && result) {
                    // This means the user has successfully logged in
                    this.getLoginSuccess(req, res);
                } else {
                    // Either an error or incorrect password
                    this.getLoginFailure(req, res);
                }
            });
        }
        else {
            this.getLoginFailure(req, res);
        }
        // if (userList?.length > 0) {
        //     // User exists with that username
        //     bcrypt.compare(passwordEntry, userList.)
        // }
    });
}


/**
 * render the register page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getRegister = (req, res, next) => {
    res.render('register', {
        pageTitle: 'Register a New Account',
        errorMessage: ''
    });
}

/**
 * handle register form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postRegister = (req, res) => {
    let username = req.body.username.trim();
    let password = req.body.password.trim();
    let errorMessage;

    User.findOne({username: usernameEntry}).then(function (user) {
        if (user) {
            // User exists
            res.render('register', {
                pageTitle: "Register a new Account",
                errorMessage: "Username already in use"
            });
        }

        else {
            // User does not exist
            // Hash password before adding
            // No errors and hash retur
            // Create the user object
            // Save new user 
            bcrypt.hash(passwordEntry, saltRound, function(err, hash) {

                if (err == null && hash) {
                    // No errors and hash retur
                    let userData = {
                        username: usernameEntry,
                        hashPassword: hash
                    }
                    // Create the user object
                    let newUser = new model.User(userData);
                    
                    newUser.save();
                    res.render("login", {
                        pageTitle: "Login",
                        errorMessage: ""
                    });
                }
                else {
                    // In case of an error 
                    console.log(err);
                } 
            });

            // User does not exist, create new record
            let userData = {
                username: usernameEntry,
                hashPassword: "TODO"
            }
        }
    })
    .catch((err) => {
        console.log("There was an error.")
    });

   
}



module.exports = exports;