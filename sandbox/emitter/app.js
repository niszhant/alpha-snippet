const Emitter = require('./emitter');

const eventEmitter = new Emitter();

eventEmitter.on('click', function () {
    console.log('click event triggered.')
});
eventEmitter.on('click', function () {
    console.log('DOM registers the event.')
});
eventEmitter.on('click', function () {
    console.log('Event handlers taking care of the event.')
});

eventEmitter.emit('click');