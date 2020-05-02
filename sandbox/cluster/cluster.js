const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const coreCount = os.cpus().length;
    console.log(`Forking over ${coreCount} CPUs.`);
    for (let i = 0; i < coreCount; i++) {
        cluster.fork();
    }
} else {
    require('./server');
}