// revealing module pattern
// Exposing only the properties and methods you want via a returned object
// A very common and clean way to structure and protect code within modules.

const message = 'Module Pattern : ';
const modulePatternVersion = 5;

function greet() {
    console.log(message + modulePatternVersion);
}

module.exports = {
    greet: greet
}