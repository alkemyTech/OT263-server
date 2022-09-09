const Joi   = require('joi');

const createTestimonialSchema = Joi.object({
    name: Joi.string().required(),
    content: Joi.string().required(),
    image: Joi.string(),
});

module.exports = {createTestimonialSchema};

