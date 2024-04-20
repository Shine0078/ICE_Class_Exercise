const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/college');

// mongoose.set('useCreateIndex', true);

// declare Schema
let Schema = mongoose.Schema;

// Student schema
let studentSchema = new Schema({
    studentId: Number,
    firstName: String,
    lastName: String
}, {
    collection: 'students'
});

// Export schemas as models
module.exports.Student = mongoose.model('student', studentSchema);