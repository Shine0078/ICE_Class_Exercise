// import student model
const studentModel = require('../models/student');

function loadStudentData(req, res) {
    studentModel.Student.find({}).then(function(studentList) {
        console.log(studentList);
        res.render('./pages/student', {
            pageTitle: 'INFT 2202 - Student Class List',
            students: studentList
        })
    })
}

/**
 * renders student view
 * @param {*} req 
 * @param {*} res 
 */
function studentView(req, res) {
    loadStudentData(req, res);
}

// Exports
module.exports = {
    studentView
};