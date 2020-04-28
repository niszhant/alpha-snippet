'use strict';
const fs = require('fs');
const path = require('path');


// async operation
fs.readFile(path.resolve(__dirname + '/student.json'), function (err, data) {
    if (!err) {
        const jsonValue = JSON.parse(data);
        console.log('async read : ', jsonValue['name']);
    }
})

// synchronous operation
const data = fs.readFileSync(path.resolve(__dirname + '/student.json'));
const jsonValue = JSON.parse(data);
console.log(jsonValue['name']);


// TO PERSIST DATA
const student = { name: 'Nishant', age: 31, mail: 'tester@test.com' };
fs.writeFileSync(path.resolve(__dirname + '/student-2.json'), JSON.stringify(student));


fs.writeFile(path.resolve(__dirname + '/student-3.json'), JSON.stringify(student), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

// Using promises

const fsPromise = require('fs').promises;
async function main() {
    const data = await fsPromise.readFile(path.resolve(__dirname + '/student-2.json'), { encoding: 'utf-8' });
    console.log('Promise based fs read operation : ', data);
}
main();