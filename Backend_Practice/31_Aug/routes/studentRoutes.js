const express = require('express');
const router = express.Router();
router.use(express.json());
const PORT = 3000;
let student=[
    {
        id:1,
        name:"yuvlaaj",
        course:"b tech",
        age:22
    },
    {
        id:2,
        name:"vishal",
        course:"kuch nhi",
        age:21
    }
]
