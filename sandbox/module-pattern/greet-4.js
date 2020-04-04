const moduleTemplate = function () {
    this.modulePattern = 4;
}
moduleTemplate.prototype.greet = function () {
    console.log(`Module Pattern : %d`, this.modulePattern);
}

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);


// passing function constructor
module.exports = moduleTemplate;