"use strict";

//Name: Samuel Abraham
//ICE11
// INFT2202
var router = require('express').Router();

var _require = require('../controllers/user.controller'),
    homeView = _require.homeView,
    getLogin = _require.getLogin,
    getRegister = _require.getRegister,
    postRegister = _require.postRegister,
    postLogin = _require.postLogin; // Home/Index 


router.get('/', homeView); // Register

router.get('/login', getLogin);
router.post('/login', postLogin); // Register

router.get('/register', getRegister);
router.post('/register', postRegister);
module.exports = router;
//# sourceMappingURL=user.route.dev.js.map
