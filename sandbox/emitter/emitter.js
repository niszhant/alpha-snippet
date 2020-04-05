function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    if (!this.events[type]) {
        this.events[type] = [];
    }
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    // if (this.events[type]) {
    //     this.events[type].forEach(listener => listener());
    // }
    executeListener(type, this);
}

function executeListener(type, target) {
    if (target.events[type]) {
        target.events[type].forEach(listener => listener());
    }
}

module.exports = Object.freeze(Emitter);