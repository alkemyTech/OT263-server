const Joi   = require('joi');

const createTestimonialSchema = Joi.object({
    name: Joi.string().required(),
    content: Joi.string().required(),
});

module.exports = {createTestimonialSchema};

