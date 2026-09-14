const express = require("express");
const router = express.Router();

const checkroles = require("../middleware/roleMiddleware");
const Student = require("../models/studentModel");

// Local array - no longer used
/*
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
*/

// Router middleware
router.use((req, res, next) => {
    console.log("You are at student route");
    next();
});


// GET all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Search students
router.get("/search", async (req, res) => {
    try {
        const course = req.query.course;
        const age = Number(req.query.age);

        const students = await Student.find({
            course: course,
            age: age
        });

        res.json(students);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// GET student by ID
router.get("/:id", checkroles("student", "teacher", "admin"), async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// POST - Add student
router.post("/", checkroles("teacher", "admin"), async (req, res) => {
    try {
        const newStudent = await Student.create({
            name: req.body.name,
            age: req.body.age,
            course: req.body.course
        });

        res.status(201).json({
            message: "Student added",
            student: newStudent
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// DELETE student
router.delete("/:id", checkroles("admin"), async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            student: student
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// PUT - Update complete student
router.put("/:id", checkroles("teacher", "admin"), async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                course: req.body.course
            },
            { new: true }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// PATCH - Update selected fields
router.patch("/:id", checkroles("teacher", "admin"), async (req, res) => {
    try {
        const { name, age, course } = req.body;

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                ...(name !== undefined && { name }),
                ...(age !== undefined && { age }),
                ...(course !== undefined && { course })
            },
            { new: true }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;