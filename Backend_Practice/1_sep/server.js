import express from 'express'
const app = express();
const PORT = 3000;

let teacher=[
    {   
        id: 1,
        name:"mohit",
        age:"33",
        subject:"dsa"
    },
    {
        id: 2,
        name:"manas",
        age:"45",
        subject:"aptitude"
        
    }
]


app.listen(PORT, ()=>{
    console.log("server is listening......");
    
})