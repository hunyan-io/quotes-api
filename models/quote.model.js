const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Quote = sequelize.define("quote", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Quote;
