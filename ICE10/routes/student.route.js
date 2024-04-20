const express = require('express');
const { studentView } = require('../controllers/student.controller');

// Create an express router object
const router = express.Router();

// Handle the '/student' URL with a GET method to use studentView function
router.get('/student', studentView);

// Export the router
module.exports = router;