
const fs = require('fs');
///// pipe chaining /////
const zlib = require('zlib');
const gzip= zlib.createGzip();
const readStream = fs.createReadStream('./tutorial/text.txt', 'utf8');
const writeStream = fs.createWriteStream('./tutorial/text1.txt');
// readStream.on('data', (chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
    
// });

//compress then pipe.
readStream.pipe(gzip).pipe(writeStream);
