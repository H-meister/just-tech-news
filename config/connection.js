//import the Sequelize constructor from the library
const Sequelize = require('sequelize');
//very important to require dotenv this will allow the database to be accessed.
require('dotenv').config();

//create connection to our satabase, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;