const Joi = require("joi");

const createCategorySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
});

const updateCategorySchema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
});

const findCategorySchema = Joi.object({
    id: Joi.number().integer().required(),
});

module.exports = {
    createCategorySchema,
    updateCategorySchema,
    findCategorySchema,
};
