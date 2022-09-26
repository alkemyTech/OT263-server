const Joi = require('joi');

const contactSchema = Joi.object({
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
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  message: Joi.string()
    .min(3)
    .max(30)
    .required(),
})

module.exports = {
  contactSchema,
}