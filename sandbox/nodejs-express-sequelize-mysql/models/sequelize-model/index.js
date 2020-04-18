// Modeling Tables
// This Sequelize Model represents restTutorials table in MySQL database. 
// These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.
module.exports = (database, sequelize) => {
    // table name = restTutorial
    return database.define("restTutorial", {
        title: {
            type: sequelize.STRING,
            allowNull: false
        },
        description: {
            type: sequelize.TEXT
        },
        published: {
            type: sequelize.BOOLEAN,
        },
        publisher: {
            type: sequelize.STRING,
        }
    });
};

/*
 Internally, sequelize.define  calls Model.init
The above code tells Sequelize to expect a table named restTutorial in the database with the fields

The table name is automatically pluralized by default (a library called inflection is used under the hood to do this). This behavior can be stopped for a specific model by using the
freezeTableName: true option, or for all models by using the define option from the Sequelize constructor.
Sequelize also defines by default the fields id (primary key), createdAt and updatedAt to every model.
If you want Sequelize to automatically create the table (or modify it as needed) according to your model definition, you can use the sync method
*/

/*
Sequelize query
sequelize.query("UPDATE users SET y = 42 WHERE x = 12").then(([results, metadata]) => {
  // Results will be an empty array and metadata will contain the number of affected rows.
})
*/