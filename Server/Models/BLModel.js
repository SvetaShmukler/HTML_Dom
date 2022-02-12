require('../configs/db');

const studentModel = require('./StudentsModel');

//Get All Students Data:

const getAllstudents = () => {
    return new Promise((resolve, reject) => {
        studentModel.find({}, (err, data) => {
            if (err) 
            {
                reject(err);
            }
            else 
            {

                resolve(data);
            }
        });

    });
}

//Get Specific Student Data by id:

const getOneStudent = (id) => {
    return new Promise((resolve, reject) => {
        studentModel.findById(id, (err, data) => {
            if (err) 
            {
                reject(err)
            }
            else 
            {
                resolve(data)
            }
        });
    });
}

//Add student:

const addStudent = (newStudent) => {
    return new Promise((resolve, reject) => {
        const newStudents = new studentModel(newStudent);
        newStudents.save((err) => {
            if (err) 
            {
                reject(err);
            }
            else
            {
                resolve("New student added");
            }
        });
    });
}

//Update student:

const updateStudent = (id, newStudent) => {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndUpdate(id, newStudent, (err,data) => {
            if (err) 
            {
                reject(err);
            }
            else 
            {
                resolve("Student updated");
            }
        });
    });
}

//Delete student by id:

const deleteStudent = (id) => {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndDelete(id,(err,data) => {
            if (err) 
            {
                reject(err);
            }
            else 
            {
                resolve("Student Deleted");
            }
        });
    });
}

//Export of BL Model:
module.exports = { getAllstudents, getOneStudent, addStudent, updateStudent, deleteStudent }