const validator = require('../util/StudnetsValidator');
const Students = require("../models/StudentsModel");
const Student = require('../models/StudentsModel');
const getAllStudents = (req,res)=>{
      res.setHeader("Access-Control-Allow-Origin","*");
        // res.json(Students);
        res.render("Students.ejs",{std:Students.fechAllStudents()});
};

const getStudentById = (req,res)=>{
    let id = req.id;
    const std = Students.find((val,idx,rr)=>{
        return val.id == id;
    });
    if(std)
    {
        res.json(std);
    }else{
        res.send('cant find the student')
    }
   
};

const createNewStudents  = (req,res)=>{
    let valid = validator(req.body);
    // console.log(validator(req.body));
      if(valid)
      {
         let std = new Student(req.body)
         std.saveStudents();
        res.json(req.body);
      }else{
          
          res.status(403).send('foribend command');
      }
}


const deleteStudent = (req,res)=>{
    let index= Students.findIndex((val)=>{
       return val.id == req.params.id
   });
   if(index != -1)
   {
    let deletedStudent = Students.splice(index,1); 
    res.status(200).send("one element afftedcd",deletedStudent)
   }else{
       res.status(404).send("no element found to delected")
   }
}

const updateStudent =  (req,res)=>{
    let idx = Students.findIndex((val)=>{
        return val.id = req.params.id;
    });
    if(idx != -1)
    {
         for(i in req.body)
         {
             Students[idx][i] = req.body[i];
         } 
         res.json(Students[idx]);
    }else{
        res.send("students not found ... update incomplete");
    }
 }
module.exports = {getAllStudents,getStudentById,createNewStudents,deleteStudent,updateStudent};