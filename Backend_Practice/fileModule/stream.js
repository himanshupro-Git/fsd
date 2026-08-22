import fs from 'fs';
const readStream = fs.createReadStream('./test.txt');
const writeStream = fs.createWriteStream('./output.txt');
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);

});

// readStream.on('end',()=>{
//     console.log("Reached at the end fo file");                 // instead of using this line of code we can use the code below
    
// });

readStream.pipe(writeStream); // Creating  pipe  between readStream and writestream for better streaming
writeStream.on("finish",()=>{
    console.log("End of stream"); // calling on method of writestream with even finish to decalare and 
});

