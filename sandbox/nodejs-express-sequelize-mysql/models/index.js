'use strict';
const dbConfig = require("../config").DB_CONFIG;
const sequelize = require("sequelize");
// To connect to the database, you must create a Sequelize instance
// This can be done by either passing the connection parameters 
// separately to the Sequelize constructor or by passing a single connection URI:
// If you’re connecting to the database from a single process, you should create only one Sequelize instance. 
// Sequelize will set up a connection pool on initialization.
// This connection pool can be configured through the constructor’s options parameter (using 
// options.pool
const database = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.sequelize = sequelize;
db.databaseConf = database;
db.posts = require("./sequelize-model")(database, sequelize);
// After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them
module.exports = db;