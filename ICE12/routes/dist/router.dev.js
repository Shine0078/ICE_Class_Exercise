"use strict";

//Name: Samuel Abraham
// Web Development -CSS
//11-04-2024
//ICE12
// INFT2202
var router = require('express').Router();

var passport = require('passport');

var isAuth = require('./authMiddleware').isAuth;

var _require = require('../controllers/user.controller'),
    homeView = _require.homeView,
    getLogin = _require.getLogin,
    getLogout = _require.getLogout,
    getRegister = _require.getRegister,
    postRegister = _require.postRegister,
    postLogin = _require.postLogin; // Home/Index 


router.get('/', homeView); // Login

router.get('/login', getLogin);
router.post('/login', postLogin); // Logout

router.get('/logout', getLogout); // Register

router.get('/register', getRegister);
router.post('/register', postRegister);
module.exports = router;
//# sourceMappingURL=router.dev.js.map
