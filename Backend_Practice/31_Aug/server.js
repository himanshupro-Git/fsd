import express from 'express';
const app = express();

const PORT = 3000;
app.use(express.json());
let students = [

    {
        id:1,
        name:"John",
        age:21,
        course:"BCA"
    },
    {

        id:2,
        name:"Johnny",
        age:22,
        course:"MCA"
    }
]

// app.get('/students', (req,res)=>{
//     res.json(students);
//     res.statusCode(200)
// })

// GET method
app.get('/students/:id', (req, res)=>{
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    const student = students.find(student => student.id === id);
    if(!student){
        return res.status(404).json({
            message:"Student not found"
        })
    }

    res.json(student)
    
    
})

// POST method
app.post('/students',(req,res)=>{
    const newStudent ={
        id:students.length + 1,
        name:req.body.name,
        age:req.body.age,
        course:req.body.course
    }        
    students.push(newStudent);
    res.status(201).json({
        message:"Student added",
        student: newStudent
    })
})


app.delete('/students/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

     if(!student){
        return res.status(404).json({
            message:"Student not found"
        })
    }
    students = students.filter(s => s.id !== id);
    res.status(200).json({
        message:"Student deleted successfuly",
        student: students
    })
})



app.listen(PORT,()=>{
    console.log("Server is listening.........");
    
})
