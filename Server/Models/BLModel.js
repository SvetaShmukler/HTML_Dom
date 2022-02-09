require('../configs/db')

const studentModel = require('./StudentsModel');

//Get All Students Data:

const getAllstudents = () => {
    return new Promise((resolve, reject) => {
        studentModel.find({}, (err, data) => {
            if (err) {
                reject(err);
            }
            else {

                resolve(data);
            }
        });

    });
}

//Get Specific Student Data:


const getOneStudent = (id) => {
    return new Promise((resolve, reject) => {
        studentModel.findById(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
}

//


const addStudent = (newStudent) => {
    return new Promise((resolve, reject) => {
        const newStudents = new studentModel(newStudent);
        newStudents.save((err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve("New student added");
            }
        });
    });
}

const updateStudent = (id, newStudent) => {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndUpdate(id, newStudent, (err,data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Student updated");
            }
        });
    });
}



const deleteStudent = (id) => {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndDelete(id, (err,data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Student Deleted");
            }
        });
    });
}

//addStudent({ FullName: "Moshe Israeli", Email: "moshe@google.com", Faculty: "Electronics", BirthDate: "02/02/2000", Exams: [{ Name: "Physics", Date: "02/02/2000", Grade: 95 }] })
//const obj = { FullName: "Moshe1111", Email: "moshe@google.com", Faculty: "Electronics", BirthDate: "02/02/2000", Exams: [{ Name: "Physics", Date: "02/02/2000", Grade: 95 }] }
//const id2 = "61acc035147c8538f9839c42"
//updateStudent(id2, obj)

//getOneStudent("Avi Cohen").then(x=>console.log(x))



module.exports = { getAllstudents, getOneStudent, addStudent, updateStudent, deleteStudent }