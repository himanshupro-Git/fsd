const express = require('express')
const app = express();
const PORT = 8000;

app.use(express.json());

// app.get('/square/area', (req, res)=>{
//     const length = parseFloat(req.query.length);
//     if(!length){
//         return res.status(404);
//     }
//     const area = length*length;
//     return res.status(200).json({
//         "area": area
//     });
// })


// app.get('/square/perimeter', (req, res)=>{
//     const length = parseFloat(req.query.length);
//     const perimeter = 4 * length;
//     res.json({
//         perimeter: perimeter
//     });
// })


// app.get('/rectangle/area', (req, res)=>{
//     const length = parseFloat(req.query.length);
//     const width = parseFloat(req.query.width);
//     const area = length*width;
//     res.json({
//         area: area
//     });
// })

// app.get('/rectangle/perimeter', (req, res)=>{
//     const length = parseFloat(req.query.length);
//     const width = parseFloat(req.query.width);
//     const peri = 2*(length + width);
//     res.json({
//         perimeter: peri
//     });
// })

app.listen(PORT,()=>{
    console.log("Serve is listening at port 8000");
});