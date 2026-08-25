const express = require('express');
const app = express() // const server = http.createServer()

// for GET operation
// app.get()

// for POST operation
// app.post()

//same for path and delete
// app.path()
// app.delete()

app.get('/',(req,res)=>{
    res.end("hello express");
})

app.listen(3000,()=>{
    console.log("Server is listening...");
    
})