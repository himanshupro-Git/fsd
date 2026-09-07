const express = require('express');
const router = express.Router();
// router.use(express.json());
// const PORT = 3000;
// app.use(express.json());
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


// GET all students
router.get("/", (req, res) => {
    res.json(students);
});

router.get('/search',(req,res)=>{
    const course = req.query.course;
    const age = req.query.age;
    const student = students.filter(s=>s.course.toLowerCase() === course.toLowerCase() && s.age === age);
    res(json);
})

// GET method for searching students
router.get('/:id', (req, res)=>{
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
router.post('/students',(req,res)=>{
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


router.delete('/:id',(req,res)=>{
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


router.put('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if(!student){
        res.status(404).json({
            message:"Student not found"
        })
    }

    student.name = req.body.name;
    student.age = req.body.age;
    student.course = req.body.course;

    res.json(student);
})

router.patch('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const {name, age, course} = req.body;
    const student = students.find(s => s.id === id);

    if(!student){
        res.status(404).json({
            message:"Student not found"
        })
    }

    if(name!=undefined){
        name = req.body.name;
    }
    if(age!=undefined){
        age = req.body.age;
    }
    if(course!=undefined){
        course = req.body.course;
    }

    res.json(student);
})


module.exports = router
