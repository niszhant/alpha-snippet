const { spawn } = require('child_process');
const child = spawn('cd');

child.stdout.on('data', (data) => {
    console.log(`child stdout : \n ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`child stderr : \n ${data}`);
});

child.on('exit', function (code, signal) {
    console.log(`child process exited with code : ${code} and signal : ${signal}`);
});

child.on('error', function (error) {
    console.log(`child process exited with error : ${error}`);
});
// other events on child: disconnect, error, message, close