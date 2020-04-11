const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream(__dirname + '/modular-js.txt', { encoding: 'utf8', highWaterMark: 128 * 1024 });

const writeStream = fs.createWriteStream(__dirname + '/modular-js-copy.txt', {
    autoClose: true,
    highWaterMark: 128 * 1024
});

const compressStreamWrite = fs.createWriteStream(__dirname + '/modular-js-compressed.txt.gz', {
    autoClose: true,
    highWaterMark: 128 * 1024
});

const compressor = zlib.createGzip();

// readStream.on('data', /** @param {string} chunk */(chunk) => {
//     console.log(chunk.length);
//     writeStream.write(chunk);
// });

// does the same as commented code above
readStream.pipe(writeStream);

readStream.pipe(compressor).pipe(compressStreamWrite);