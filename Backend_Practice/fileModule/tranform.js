import fs from 'fs';
import zlib from "zlib";
//Create read stream
const readStream = fs.createReadStream("./test.txt");
//transform
const gzip = zlib.createGzip()
//create and write on steam
const writeSteam = fs.createWriteStream('./data.txt')
