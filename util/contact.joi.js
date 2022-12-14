const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  phone: Joi.string()
    .alphanum()
    .min(3)
    .max(30),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  message: Joi.string()
    .min(3)
    .max(30),
})

module.exports = schema