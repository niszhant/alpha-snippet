'use strict';
const os = require('os');
const cluster = require('cluster');
const pid = process.pid;
const { v4: uuidv4 } = require('uuid');

const createChild = () => {
    const workerId = uuidv4();
    const worker = cluster.fork({ workerId });
    worker['workerId'] = workerId;
    return worker;
};

if (cluster.isMaster) {
    console.log(`Master process is running with pid: ${process.pid}`);
    const cpuCoreCount = os.cpus().length;
    const workerMap = new Map();

    for (let index = 0; index < cpuCoreCount; index++) {
        const worker = createChild();
        workerMap.set(worker.workerId, worker);
    }

    // sending msg to all workers.
    for (let worker of workerMap.values()) {
        worker.on('message', ({ message }) => {
            console.log(`Message to master from child worker : ${message}`);

        });
        worker.send({ message: 'Hello from MASTER.' });
    }

    // Making use of the events 
    // ‘online’, ‘disconn ect’, ‘listening’, ‘message’, ‘error’ and ‘exit’ emitted by worker process, 
    // the state of worker process can be easily managed; 
    cluster.on('exit', (worker) => {
        console.log('mayday! mayday! worker', worker.workerId, ' is down!');
        const newWorker = createChild();
        workerMap.set(newWorker.workerId, newWorker);
    });
} else {
    console.log(`child process started with PID : ${pid}`);
    require('./server');
}