const Joi = require('joi');

const updateCategorySchema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
});

module.exports = { updateCategorySchema };