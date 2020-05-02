const express = require('express');
const isPrime = require('./prime');
const app = express();

app.get('/', (req, res) => {
    const primes = [];
    const max = Number(req.query.max) || 10000;
    for (let i = 1; i <= max; i++) {
        if (isPrime(i)) primes.push(i);
    }
    // send message to master
    process.send({ message: `Message from worker ${process.pid} : prime count = ${primes.length}` });
    res.json(primes);
});

app.listen(process.env.PORT || 3030, () => {
    console.log('app is running!');
});

// receive message from master.
process.on('message', function (message) {
    console.log(`Worker ${process.pid} recevies message '${JSON.stringify(message)}'`);
});


module.exports = app;