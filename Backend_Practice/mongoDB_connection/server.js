require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const studentRoutes = require('./Routes/studentRoutes');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log("Database connection error:", error);
    });

app.use('/students', studentRoutes);







app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});