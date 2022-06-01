const { HttpError } = require("../utils/errors");

module.exports = (err, req, res, next) => {
    if (err.type === "entity.parse.failed") {
        err = new MalformedRequestError();
    }
    if (err instanceof HttpError) {
        res.status(err.statusCode).json({
            error: err.httpMessage,
            message: err.userMessage,
        });
    } else {
        res.status(500).json({
            error: "Internal Server Error",
            message: null,
        });
    }
};
