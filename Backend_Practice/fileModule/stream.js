import fs from 'fs';
const readStream = fs.createReadStream('./test.txt');
const writeStream = fs.createWriteStream('./output.txt');
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);

});

readStream.on('end',()=>{
    console.log("Reached at the end fo file");
    
});

// const writeStream = fs.createWriteStream('./output.txt');
// writeStream.on(

// )
