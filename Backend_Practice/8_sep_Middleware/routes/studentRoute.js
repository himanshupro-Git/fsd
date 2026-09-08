const express = require("express");
const router = express.Router();

// const checkroles = require("./middleware/roleMiddleware");
const checkroles = require("../middleware/roleMiddleware");

let students = [
    {
    id: 1,
    name: "John",
    age: 21,
    course: "BCA"
    },
    {
    id: 2,
    name: "Johnny",
    age: 22,
    course: "MCA"
    }
];

// Router middleware
router.use((req, res, next) => {
console.log("You are at student route");
next();
});

// GET all students
router.get("/", (req, res) => {
res.json(students);
});

// Search students
router.get("/search", (req, res) => {
    const course = req.query.course;
    const age = Number(req.query.age);

    const filteredStudents = students.filter(
        s =>
            s.course.toLowerCase() === course.toLowerCase() &&
            s.age === age
    );

    res.json(filteredStudents);


});

// GET student by ID
router.get("/:id",checkroles("student", "teacher", "admin"),(req, res) => {
        const id = parseInt(req.params.id);

        const student = students.find(student => student.id === id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    }


);

// POST - Add student
router.post("/",checkroles("teacher", "admin"),(req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };


        students.push(newStudent);

        res.status(201).json({
            message: "Student added",
            student: newStudent
        });
    }


);

// DELETE student
router.delete("/:id",checkroles("admin"),(req, res) => {
        const id = parseInt(req.params.id);


        const student = students.find(student => student.id === id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        students = students.filter(s => s.id !== id);

        res.status(200).json({
            message: "Student deleted successfully",
            student: student
        });
    }


);

// PUT - Update complete student
router.put("/:id",checkroles("teacher", "admin"),(req, res) => {
    const id = parseInt(req.params.id);


        const student = students.find(s => s.id === id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        student.name = req.body.name;
        student.age = req.body.age;
        student.course = req.body.course;

        res.json(student);
    }


);

// PATCH - Update selected fields
router.patch("/:id",checkroles("teacher", "admin"),(req, res) => {
    const id = parseInt(req.params.id);


        const { name, age, course } = req.body;

        const student = students.find(s => s.id === id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        if (name !== undefined) {
            student.name = name;
        }

        if (age !== undefined) {
            student.age = age;
        }

        if (course !== undefined) {
            student.course = course;
        }

        res.json(student);
    }


);

module.exports = router;
