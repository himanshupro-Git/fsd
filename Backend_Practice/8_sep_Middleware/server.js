const express = require("express");

const app = express();

const PORT = 8000;

// Parse JSON
app.use(express.json());

// General middleware
app.use((req, res, next) => {
    console.log("Requested URL:", req.originalUrl);
    console.log("Requested Type:", req.method);
    console.log("Date:", new Date());

    next();
});

// Import student routes
const studentRoutes = require("./routes/studentRoute");

// Mount student router
app.use("/students", studentRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});