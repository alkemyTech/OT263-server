const Joi = require('joi');

const createTestimonialSchema = Joi.object({
    name: Joi.string().required(),
    content: Joi.string().required(),
});
const updateTestimonialSchema = Joi.object({
    name: Joi.string(),
    content: Joi.string(),
});
const findTestimonialSchema = Joi.object({
    id: Joi.number().integer().required(),
});

module.exports = {
    createTestimonialSchema,
    updateTestimonialSchema,
    findTestimonialSchema,
};
