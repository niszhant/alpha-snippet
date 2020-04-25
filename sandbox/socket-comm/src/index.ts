import express, { Response, Request } from 'express';
import config from './config';
import cors, { CorsOptions } from "cors";
import bodyParser from 'body-parser';


const corsSettings: CorsOptions = {
    origin: "http://localhost:8081"
};


const server = express();
server.use(cors(corsSettings));
// Parse request of content-type - application/json
server.use(bodyParser.json());
// parse requests of content-type -application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// create a simple route
server.get("/", (_req: Request, res: Response) => {
    res.json({ message: "Welcome to node.js application written in Typescript." });
});
// server.use('/posts', postRoutes);

// set listening ports for request
const port = config.PORT || 8081;

server.listen(port, () => {
    console.log("Server running on port : " + port);
});
