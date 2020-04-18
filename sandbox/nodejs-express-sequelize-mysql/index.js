'use strict'
const express = require('express');
const cors = require('cors');
const db = require("./models");
const bodyParser = require("body-parser");
const config = require('./config');
const postRoutes = require('./routes/posts');

const corsSettings = {
    originL: "http://localhost:8081"
};

const server = express();
server.use(cors(corsSettings));
// Parse request of content-type - application/json
server.use(bodyParser.json());
// parse requests of content-type -application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// create a simple route
server.get("/", (req, res) => {
    res.json({ message: "Welcome to node.js rest api application. Created for learning purposes by Christos Ploutarchou" });
});
server.use('/posts', postRoutes);

// set listening ports for request
const port = config.PORT || 8081;
server.listen(port, () => {
    console.log("Server running on port : " + port);
});

// this drops the table. Only for dev environment.
// db.databaseConf.sync();