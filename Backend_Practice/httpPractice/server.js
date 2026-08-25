
// // call http module
// const http = require("http")
// //create http server
// const server = http.createServer((req,res)=>{
//     res.end("hello");
// });

// server.listen(port,()=>{
//     console.log("server is listening.....");
// })




// const http = require('http')
// const PORT = 4000
// const server = http.createServer((req,res)=>{   // req = request, res = response
//     if(req.url === "/" && req.method === "GET"){
//         res.end("You are at Home page");
//     }else if(req.url === '/About' && req.method === "GET"){
//         res.end("Code is about request and response");
//     }else if(req.url === "/Contact" && req.method === "GET"){
//         res.end("Contact us at xyz@gamil.com")
//     }else{
//         res.statusCode = 404;
//         res.end("Page not found");
//     }
// })

// server.listen(PORT,()=>{
    //     console.log("Server is listening....");
    // })
  
    
// Monday class 
                
//     import fs from 'fs';
//     const http = require('http');
//     const PORT = 4000;
//     const path = './output.txt';
//     const server = http.createServer((req,res)=>{
//             const readStream = fs.readFileSync(req);
//             if(req.url === "/" && req.method === "GET"){
//                 res.end("You are at Home page");
                
//             }else if(req.url === '/About' && req.method === "GET"){
//                 res.end("Code is about request and response");
//             }else if(req.url === "/Contact" && req.method === "GET"){
//                 res.end("Contact us at xyz@gamil.com")
//             }else{
//                 res.statusCode = 404;
//                 res.end("Page not found");
//             }
        
// })
// server.listen(PORT,()=>{
//     console.log("server is listening");
// })

// using file read and write for making log file



// using switch case 

// const http = require('http');
// const PORT = 4000;
// const server = http.createServer((req,res)=>{
//     switch(req.url){
//         case '/':
//             res.end("You are at home page");
//             break;

//         case '/About':
//             res.end("You are a About Page");
//             break;

//         case '/Contact':
//             res.end("You are at contact page");
//             break;

//         default:
//             res.statusCode = 404
//             res.end("Page not found");

//     }   
// });

// server.listen(PORT,()=>{
//     console.log("Server is listening");
// })




// const http = require("http");
// const PORT = 4000
// const server = http.createServer((req,res)=>{
//     if(req.url="/"){
//         const User = {
            
//         }
//     }
// })
