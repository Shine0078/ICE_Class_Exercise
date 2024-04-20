"use strict";

//Name: Samuel Abraham
// Web Development -CSS
//11-04-2024
//ICE12
// INFT2202
var crypto = require('crypto'); // GENERATE A PASSWORD TO SAVE TO THE DATABASE -POSTREGISTER IN USERCONTROLLER.JS USES THIS
// RETRIEVE THE PASSWORD AND CHECK WITH THE SAME HASH APPLIED TO LOGIN PASSWORD - VERIFYCALLBACK IN PASSPORT.JS USES THIS


module.exports = {
  generatePassword: generatePassword,
  validPassword: validPassword
};
//# sourceMappingURL=passwordUtils.dev.js.map
