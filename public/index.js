// file system 

const fs = require('fs');
// var data =  fs.readFileSync("./message.txt");
// console.log(data.toString()); 

// using async 

// fs.readFile("./message.tt","utf-8",function(err,info){
//     if(err)
//     {
//         console.log("error occuerd",err);
//     }else{
//         console.log(info);
//     }
// });
fs.writeFile("./newFile.txt","mr ahmed hello to me",(err)=>{
    if(err)
    {
        console.log(errr);
    }
 
fs.appendFile("./newFile.txt","asdasdsdadadsadaaddddddddddd",(err) => {
    if(err)
    {
        console.log("error occuerd",err);
    }

fs.appendFile("./newFile.txt","ahmedahmedahmedahmedahmedahmedahmedahmed",(err) => {
    if(err)
    {
        console.log("error occuerd",err);
    }
});
});
});
// fs.writeFile("./newFile.txt","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",(err)=>{
//     if(err)
//     {
//         console.log(errr);
//     }
// });
// fs.unlink("./newFile.txt",(err) => {
//     if(err)
//     {
//         console.log("error occuerd",err);
//     }
// });