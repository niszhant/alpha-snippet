'use strict';

// (1) Inheritance using util of Node.js
/* 
const util = require('util');

function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

function Policeman(fname, lname) {
    // the below line ensures that 'this' returned from Policeman function constructor has the properties + methods defined in parent function constructor from wherein
    // we are inhertiting.
    Person.call(this, fname, lname)
    this.badgeNumber = 'ABC123';
}

util.inherits(Policeman, Person);

*/

// (2) Inhertance using ES2015 classes.
// ES6 equivalent class for above logic
/*
class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Policeman extends Person {
    constructor(fname, lname) {
        super(fname, lname);
        this.badgeNumber = 'ABC123';
    }
}

*/

// (3) Inheritance using old school js

function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

function Policeman(fname, lname) {
    // the below line ensures that 'this' returned from Policeman function constructor has the properties + methods defined in parent function constructor from wherein
    // we are inhertiting.
    Person.call(this, fname, lname);
    this.badgeNumber = 'ABC123';
}

Policeman.prototype = Object.create(Person.prototype);
// OR 
// Object.assign(Policeman.prototype, Person.prototype);

Policeman.prototype.constructor = Policeman;


const constable = new Policeman('Clark', 'Kent');



// without inherting from the parent constructor function from line 15, we end up with result undefined undefined
console.log(constable.getFullName());

// Do read Object.assign as well.