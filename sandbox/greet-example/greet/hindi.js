const greetingsContent = require('./greetings.json');

function greet() {
    console.log(greetingsContent['hindi']);
}

module.exports = greet;