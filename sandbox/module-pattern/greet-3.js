const moduleObject = function () {
    this.modulePattern = 3;
}
moduleObject.prototype.greet = function () {
    console.log(`Module Pattern : %d`, this.modulePattern);
}

module.exports = new moduleObject();