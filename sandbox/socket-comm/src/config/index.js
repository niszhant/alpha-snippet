'use strict';
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_KEY: process.env.DB_PASS,
    DB_CONFIG: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "pass",
        DB: "restapi",
        dialect: "mysql",
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 50000
        }
    }
};

