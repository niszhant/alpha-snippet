const fs = require('fs');
const emitter = require('events');
const util = require('util');
const READEVENT = 'fileread';

function customFileRead() {
    emitter.call(this);
}

util.inherits(customFileRead, emitter);

/**
 * @param {string} path
 * @param {function} callback
 * @param {Object} opts
 */
customFileRead.prototype.read = function (path, callback, opts = { encoding: 'utf8' }) {
    const source = this;
    const syncRead = function () {
        console.log('Reading file @ ' + path);
        const content = fs.readFileSync(path, opts);
        source.emit(READEVENT, content);
    }
    source.on(READEVENT, (data) => callback(data));
    syncRead();
}

module.exports = customFileRead;