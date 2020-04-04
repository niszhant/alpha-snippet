const greetingsContent = require('./greetings.json');

function greet() {
    console.log(greetingsContent['en']);
}

module.exports = greet;