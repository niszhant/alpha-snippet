const Events = require('events');
class Server extends Events {
    /**
     * constructor
     * 
     * @param {Client} client 
     */
    constructor(client) {
        super();
        this.queue = [];
        client.on('command', payload => {
            switch (payload.command) {
                case "help": this.help(); break;
                case "add": this.add(payload['task']); break;
                case "ls": this.ls(); break;
                case "delete": this.delete(payload['id']); break;
            }
        });
    }

    help() {
        this.emit('response', 'help executed.');
    }

    add(item) {
        item['id'] = Math.random() * 1000;
        this.queue.push(item);
        this.emit('response', 'add executed.');
    }

    ls() {
        this.emit('response', this.queue);
    }

    delete(id) {
        this.queue = this.queue.filter(task => {
            task['id'] === id;
        });
        this.emit('response', 'delete executed.');

    }
}

module.exports = (client) => new Server(client);