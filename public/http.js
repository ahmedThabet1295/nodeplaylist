// http module
const http = require("http");
const fs = require("fs");
// create server 
const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log("request recerved");

    if(req.url =="/")
    {
        res.write("this response from server");
    res.end();
    }
    if(req.url=="/home")
    {
        fs.readFile("./home.html",(err,data)=>{
            if(err) 
            {
                console.log("error");
            } else{
                res.write(data.toString());
                res.end();
            }

        })
    }
  
    else{
        res.statusCode = 404;
        res.end();
    }
   
});

 
server.listen(3000,()=>{
    console.log("listening");
});

// handle request url 