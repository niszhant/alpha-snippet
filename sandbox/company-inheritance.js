'use strict';

function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

Person.prototype.getFullName = function () {
    return (this.firstName + ' ' + this.lastName);
}

function Employee(fname, lname) {
    Person.call(this, fname, lname);
    const id = Math.random() * 1000;
    this.getId = function () {
        return id;
    };
    this.salary = 0;
    this.role = [];
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.setSalary = function (salary) {
    this.salary = salary;
}

Employee.prototype.addRole = function (role) {
    this.role.push(role);
}



const developer = new Employee('Nishant', 'Kumar');
developer.addRole('full stack developer');
developer.setSalary(50000);
console.log(developer.getId() + ': ' + developer.getFullName());