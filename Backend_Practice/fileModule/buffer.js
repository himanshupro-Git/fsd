
const buffer = Buffer.from("Hello");
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.length);

const buffer2 = Buffer.alloc(20);
console.log(buffer2);
console.log(buffer2[0]); // accessing buffer value at 

console.log(String.fromCharCode(buffer[2]));
