const express = require("express");

const app = express();

const PORT = 3000;

// Global middleware 1
// app.use((req, res, next) => {
//     console.log("middleware 1");
//     next();
// });

// // Global middleware 2
// app.use((req, res, next) => {
//     console.log("middleware 2");
//     next();
// });

// // Application-level middleware for /user/:id
// app.use(
//     "/user/:id",

//     (req, res, next) => {
//         console.log("Requested URL:", req.url);
//         next();
//     },

//     (req, res, next) => {
//         console.log("Request type:", req.method);
//         next();
//     }
// );

// // Route handler
// app.get("/user/:id", (req, res) => {
//     console.log("Router Middleware");
//     res.send("User Page");
// });






// app.get('/student/:id',
//     (req,res,next)=>{
//         if(req.params.id === "0"){
//             next('route')
//         }else{
//             next()
//         }
//     }
// )
// app.get('/student/:id', (req,res)=>{
//     res.send("Special route here")
// })

// app.use((err,req,res,next)=>{
//     console.error(err.stack);
//     res.status(500).send("Something went wrong");
    
// })



// Build in middleware
app.use(express.json());

app.post("/user", (req, res) => {
    console.log(req.body);

    res.send("User received");
});

app.listen(PORT, () => {
    console.log("Server is running...");
});



// Start server
app.listen(PORT, () => {
    console.log("server is listening....");
});