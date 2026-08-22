const { log } = require("console");
const fs = require("fs");
filePath = "./test.txt";
const result = fs.readFileSync(filePath,"utf-8");
console.log(result);

filePath2 = "./test2.txt";
const result2 = fs.readFileSync(filePath2, "utf-8");
console.log(result2);

// Reading file async

fs.readFile(filePath, (err,data)=>{
    if(err) throw err
    console.log(data);
})
