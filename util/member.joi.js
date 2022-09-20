const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  image: Joi.string().uri()
})

module.exports = schema