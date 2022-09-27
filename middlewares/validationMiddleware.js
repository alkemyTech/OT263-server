const createError = require("http-errors");

const validationMiddleware = (schema, property) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req[property]);
            next();
        } catch (error) {
            next(createError(400, error.message));
        }
    };
};

module.exports = { validationMiddleware };
