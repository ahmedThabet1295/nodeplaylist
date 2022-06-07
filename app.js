const express = require('express');
const path = require('path');
const app = express();
const Ajv = require('ajv');
const hlmet = require('helmet');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const logging = require('./middleware/logging');
const studentsRouter  = require("./routes/Students");
const { default: helmet } = require('helmet');
app.use(express.urlencoded({extended:true}));

// app settings 
app.set("template engine","ejs");
const port = process.env.PORT||3000;


// built in middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/assets",express.static("public"));
app.use(cookieParser());
app.use(helmet());
app.use("/api/students",studentsRouter)
// custom middleware 
app.use(logging);

// handle parameter middleware
app.param("id",(req,res,nxt,val)=>{

    // validation 
     
    // add param as prop for rq
    if(Number(val))
    {
        req.id = val;
        nxt();
    }else{
        res.send("invalid ");
    }
  
})
// handle any request 
app.get("/",(req,res)=>{
    console.log("request recieved ....");
    // res send 
    res.sendFile(path.join(__dirname,"form.html"));
    // res.send("this is server response");
});

app.get("/welcome.html",(req,res)=>{
    console.log('object :>> ', req.query.fnm);
      console.log('object :>> ', req.query.fnm);
     console.log('object :>> ', req.query.lnm);
    res.sendFile(path.join(__dirname,"/welcome.html"))
});
app.post("/welcome.html",(req,res)=>{
    // console.log('object :>> ', req.query.fnm);
    //   console.log('object :>> ', req.query.fnm);
    //  console.log('object :>> ', req.query.lnm);
    // res.sendFile(path.join(__dirname,"/welcome.html"))

    console.log(req.body);
    res.cookie("username",Buffer.from(req.body.fnm).toString("base64"));
    res.cookie("userAge",25,{
        httpOnly:true
    });
    // console.log(req.body.lnm);
    res.send(`thanks ${req.body.fnm} for send data`);
});
// request all students
 


app.get('/abc',(req,res)=>{
    console.log(req.cookies.username);
    res.send(200)
})
app.listen(port,()=>{
    console.log("listen !!!!!!");
})