const Quote = require("../models/quote.model");
const sequelize = require("../utils/database");

exports.getRandomQuotes = async (req, res, next) => {
    try {
        const result = await Quote.findAll({
            order: sequelize.random(),
            limit: req.query.count,
        });
        res.status(200).json(result.map((quote) => quote.toJSON()));
    } catch (err) {
        next(err);
    }
};
