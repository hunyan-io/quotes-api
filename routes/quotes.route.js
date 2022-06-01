const express = require("express");
const Joi = require("joi");

const validate = require("../middlewares/validate");
const controller = require("../controllers/quotes.controller");

const router = express.Router();

router.get(
    "/random",
    validate.query(
        Joi.object({
            count: Joi.number().integer().positive().required(),
        }).required()
    ),
    controller.getRandomQuotes
);

module.exports = router;
