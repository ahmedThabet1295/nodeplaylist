// create new dir remove dir read dir 
const fs = require("fs");
// fs.mkdir("newDir",(err)=>{
//     if(err)
//     {
//         console.log("error occured",err);
//     }else{
//         process.chdir("./newDir");
//         fs.writeFile("./myFile","alhamedforallah",(err)=>{
//             if(err)
//                 {
//                     console.log("error occured",err);
//                 }
//         })
//     }
// });


fs.rmdir()
fs.readdir("./",(err,files)=>{
    if(err)
        console.log("error occured",err);
    else 
         console.log(files);   
})