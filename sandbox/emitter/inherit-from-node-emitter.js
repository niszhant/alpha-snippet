const emitter = require('events');
const util = require('util');

const event = {
    GREET: 'greet'
}
const greetFnCtor = function () {
    // the line below ensures that any object of greetFnConstructor has all the properties from the EventEmitter function constructor
    emitter.call(this);
    this.msg = 'Hello ';
}


// essentialy the below line does it Object.create(fnCtor.prototype, superFnCtor.prototype)
util.inherits(greetFnCtor, emitter);

greetFnCtor.prototype.greet = function () {
    console.log(this.msg);
    this.emit(event.GREET);
}
const greetInstance = new greetFnCtor();
greetInstance.on(event.GREET, function () {
    console.log('Some greeted me.');
});

greetInstance.greet();