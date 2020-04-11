const customFileRead = require('./customfs');

const fsOps = new customFileRead();

/**
 * 
 * @param {string} data 
 */
const callbackFn = function (data) {
    console.log('Data received and processed : ' + data.toUpperCase());
}
console.log('1');
fsOps.read(__dirname + '/greet.txt', callbackFn);
console.log('2');
