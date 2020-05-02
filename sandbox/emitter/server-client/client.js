const Events = require('events');
const Server = require('./server');

class Client extends Events {
    constructor() {
        super();
        const server = Server(this);
        server.on('response', (response) => {
            console.log(response);
        });
    }
    help() {
        const payload = {
            command: 'help'
        };
        this.emit('command', payload);
    }

    add(task) {
        const payload = {
            command: 'add',
            task: task
        };
        this.emit('command', payload);
    }

    ls() {
        const payload = {
            command: 'ls'
        };
        this.emit('command', payload);
    }

    delete(id) {
        const payload = {
            command: 'delete',
            id: id
        };
        this.emit('command', payload);
    }
}

const client1 = new Client();
client1.ls();
client1.add({ task: 'create file' });
client1.ls();
client1.help();
client1.add({ task: 'create file 2' });
client1.ls();


const client2 = new Client();
client2.ls();
client2.add({ task: 'client2 create file' });
client2.ls();
client2.help();
client2.add({ task: 'client2 create file 2' });
client2.ls();


client1.ls();