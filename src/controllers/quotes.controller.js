const Quote = require("../models/quote.model");
const sequelize = require("../utils/database");

exports.getRandomQuotes = async (req, res, next) => {
    try {
        const result = await Quote.findAll({
            order: sequelize.random(),
            limit: req.query.count,
        });
        res.status(200).json(
            result.map((quote) => ({
                id: quote.get("id"),
                content: quote.get("content"),
            }))
        );
    } catch (err) {
        next(err);
    }
};
