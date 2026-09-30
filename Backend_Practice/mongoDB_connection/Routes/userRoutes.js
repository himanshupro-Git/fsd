const express = require('express');
const router = express.Router();
const checkroles = require('../middleware/roleMiddleware');
const User = require('../models/userModel');
const { route } = require('./studentRoutes');

router.post('/createUser', async(req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password) return req.status(400).json({message: "Please provide all required fields"});

    const user = await User.findOne({email:email, username:username});
    if(user) return res.status(200).json({message: "user already exist"});
    const hashedpassword = await  bcrypt.hash(password, 10);
    const newUser = new User({
        username: username,
        email: email,
        password: hashedpassword
    })
    if(!newUser) return res.status(400).json({message: "user not created"});
})
