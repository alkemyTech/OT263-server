const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .required(),
    content: Joi.string()
        .required(),
    image: Joi.string(),
    content: Joi.string(),
    type:Joi.string()
})   

module.exports = schema
