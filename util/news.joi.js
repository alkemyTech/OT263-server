const Joi = require('joi');

const createNewsSchema = Joi.object({
    name: Joi.string().required(),
    content: Joi.string().required(),
    categoryId: Joi.number().integer().required(),
    image: Joi.any(),
});
const updateNewsSchema = Joi.object({
    name: Joi.string(),
    content: Joi.string(),
    categoryId: Joi.number().integer(),
    image: Joi.any(),
});
const findNewsSchema = Joi.object({
    id: Joi.number().integer().required(),
});

module.exports = {
    createNewsSchema,
    updateNewsSchema,
    findNewsSchema,
};
