const express = require('express');
const router = express.Router();
const validator = require('../util/StudnetsValidator');
const stuController = require('../controllers/StudentsController');


// request all students
router.get("/",stuController.getAllStudents);

// request styudent by id
router.get("//:id",stuController.getStudentById);

// create new student
router.post("/",stuController.createNewStudents);
// handle delete method

router.delete("/:id",stuController.deleteStudent)
// update student 
router.put("/:id",stuController.updateStudent);

module.exports = router;