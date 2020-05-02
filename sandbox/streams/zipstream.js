const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
const file = process.argv[2];

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(crypto.createCipher('aes-256-gcm', 'password'))
    .on('data', () => process.stdout.write("."))
    .pipe(fs.createWriteStream(file + '.gz'))
    .on('finish', () => console.log('Done'));


// to unzip the encrypted file

// fs.createReadStream(file)
//     .pipe(crypto.createDecipher('aes-256-gcm', 'password'))
//     .pipe(zlib.createGunzip())
//     .on('data', () => process.stdout.write("_"))
//     .pipe(fs.createWriteStream(file.slice(0, -3)))
//     .on('finish', () => console.log('Done'));

