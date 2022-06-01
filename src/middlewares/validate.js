const { MalformedRequestError } = require("../utils/errors");

const validate = (field, schema) => {
    const { value, error } = schema.validate(field);
    if (error) throw new MalformedRequestError();
    return value;
};

const field = (field, schema) => (req, res, next) => {
    req[field] = validate(req[field], schema);
    next();
};

exports.field = field;

exports.query = (schema) => field("query", schema);
exports.params = (schema) => field("params", schema);
exports.body = (schema) => field("body", schema);
