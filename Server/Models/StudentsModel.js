const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    FullName: String,
    Email: String,
    Faculty: String,
    BirthDate: Date,
    Exams:[{Name:String,Date:Date,Grade:Number}]
})

module.exports = mongoose.model('students',studentSchema);