const mongoose = require('mongoose');
const Schema = mongoose.Schema;// 'Schema' maps to a MongoDb collection and defines the shape of the documentt within that collection

// A model is a class with which we construct document in a collection:
const studentSchema = new Schema({
    FullName: String,
    Email: String,
    Faculty: String,
    BirthDate: Date,
    Exams:[{Name:String,Date:Date,Grade:Number}]
})

module.exports = mongoose.model('students',studentSchema);//mongoose.model([COLLECTION], [SCHEMA])