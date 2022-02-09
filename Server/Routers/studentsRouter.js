const express = require('express')
const studentsBL = require('../Models/BLModel')

const router = express.Router()

router.route('/').get(async(req,res) => {
    try
    {
        const students = await studentsBL.getAllstudents();
        return res.json(students);
    }
    catch(error)
    {
        return res.json(error)
    }
})

router.route('/:id').get(async(req,res) => 
{
    try
    {
        const id = req.params.id;
        const student = await studentsBL.getOneStudent(id);
        return res.json(student);
    }
    catch(error)
    {
        return res.json(error)
    }
})

router.route('/').post(async(req,res) => {
    try
    {
        const newstudent = req.body;
        const resultStudents = await studentsBL.addStudent(newstudent);
        return res.json(resultStudents);
    }
    catch(error)
    {
        return res.json(error)
    }
})

router.route('/:id').put(async(req,res) => {
    try
    {
        const id = req.params.id;
        const updateStudent = req.body;
        const resultStudent = await studentsBL.updateStudent(id,updateStudent)
        return res.json(resultStudent);
    }
    catch(error)
    {
        return res.json(error)
    }
})


router.route('/:id').delete(async(req,res) => {
    try
    {
        const id = req.params.id;
        const resultStudents = await studentsBL.deleteStudent(id)
        return res.json(resultStudents);
    }
    catch(error)
    {
        return res.json(error)
    }
})

module.exports = router


