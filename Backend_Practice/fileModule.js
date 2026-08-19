const { error } = require('console');
const fs = require('fs');
const filePath = "./test.txt";
const filePath2 = "./test2.txt";
const content = "hello teacher"
const content2 = "this is content for asynchronous file";
// fs.writeFileSync(filePath,content); 
fs.writeFile(filePath2, content2,(error)=>{
    if (error) throw error;
    console.log("File written successfully");
})
console.log("I am out of the file");
