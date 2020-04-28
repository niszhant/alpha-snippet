
/**
@see https://dev.to/logicmason/settimeout-vs-setimmediate-vs-process-nexttick-3lj2
What's the difference between setTimeout(callback, 0) and process.nextTick(callback)? How about Node's setImmediate(callback)?

On the surface it appears that all three functions do the same thing—they execute the callback after the current event loop,
but before anything else. The natural question to ask is, why are there three different functions? Let's run an experiment:

Explanation

The first one executed was process.nextTick, which puts its callback at the front of the event queue. 
It will execute after the code currently being executed but before any I/O events or timers.

Next is "timeout". Since we passed setTimeout a timeout of 0, there's no additional enforced delay before its execution,
and it is placed on into the timer queue during the next loop.

Finally, we have setImmediate, which is clearly not as immediate as its name suggests! 
Its callback is placed in the check queue of the next cycle of the event loop. Since the check queue occurs later than the timer queue, setImmediate will be slower than setTimeout 0.

All in all, the event loop looks like this:

timers -> IO -> poll -> check ->close -> timers -> ...

Timers: callbacks from setInterval or setTimeout
IO callbacks: callbacks from I/O events
Idle: used internally by Node between IO and Poll phases
Poll: retrieve new I/O events
Check: callbacks from setImmediate execute here
Close: handle closed connections like sockets

*/


let racer1 = function () {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
    console.log("current event loop");
}

// let racer2 = function () {
//     process.nextTick(() => console.log("nextTick"));
//     setTimeout(() => console.log("timeout"), 0);
//     setImmediate(() => console.log("immediate"));
// }

// let racer3 = function () {
//     setImmediate(() => console.log("immediate"));
//     process.nextTick(() => console.log("nextTick"));
//     setTimeout(() => console.log("timeout"), 0);
// }

racer1()
// racer2()
// racer3()


// current event loop
// nextTick
// timeout
// immediate