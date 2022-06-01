const dbConfig = require("../../db.config.js");

const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    dbConfig.options
);

module.exports = sequelize;
