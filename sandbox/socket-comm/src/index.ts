import express, { Response, Request } from 'express';
import config from './config';
import cors, { CorsOptions } from "cors";
import bodyParser from 'body-parser';
import path from 'path';
import { IOevent } from './service/io-event';

const corsOptions: CorsOptions = {
    origin: "http://localhost:8081"
};
const app = express();
app.use(cors(corsOptions));

// Parse request of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// create a simple route
app.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname + '/../src/static/index.html'));
});
// server.use('/posts', postRoutes);

// set listening ports for request
const port = config.PORT || 8081;


/**
    var http = require('http');
    var app = express();
    var server = http.createServer(app);

    Below code is replacement for creating httpserver ourselves. We are letting express create one for us.
    @see https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen
 */
const httpServer = app.listen(port, () => {
    console.log("Server running on port : " + port);
});

const io = require('socket.io').listen(httpServer);

io.on(IOevent.CONNECT, (socket: any) => {
    console.info(`Client connected [id=${socket.id}]`);
    // If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:
    //   socket.broadcast.emit('hi');

    socket.on(IOevent.MESSAGE, (payload: string) => {
        console.log('payload received : ' + payload);
        io.emit(IOevent.MESSAGE, payload);
    });

    socket.on(IOevent.DISCONNECT, (socket: any) => {
        console.info(`Client disconnected [id=${socket.id}]`);
    });
});