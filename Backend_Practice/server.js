
// // call http module
// const http = require("http")
// //create http server
// const server = http.createServer((req,res)=>{
//     res.end("hello");
// });

// server.listen(port,()=>{
//     console.log("server is listening.....");
// })

const https = require('https')
const PORT = 4000
const server = https.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.end("You are at Home page");
    }else if(req.url === '/About' && req.method === "GET"){
        res.end("Code is about request and response");
    }else if(req.url === "/Contact" && req.method === "GET"){
        res.end("Contact us at xyz@gamil.com")
    }else{
        res.statusCode = 404;
        res.end("Page not found");
    }
})

server.listen(PORT,()=>{
    console.log("Server is listening....");
})