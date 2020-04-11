const fs = require('fs');

const fileContent = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(fileContent);

const fileContentAsync = fs.readFile(__dirname + '/greet.txt', function (err, data) {
    if (!err) {
        console.log(data); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21 21>
    };
});

const fileContentAsyncWithEncoding = fs.readFile(__dirname + '/greet.txt', { encoding: 'utf8' }, function (err, data) {
    if (!err) {
        console.log(data);
    };
});

// will be printed before async callbacks.
console.log('Done...');


/*
Hello World!!
Done...
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21 21>
Hello World!!
*/