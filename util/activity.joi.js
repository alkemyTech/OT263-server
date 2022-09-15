const Joi = require('joi');

const validator = (schema) => (payload) =>
schema.validate(payload, {abortEarly: false})

const schema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  content: Joi.string().required(),
})

exports.validateActivity = validator(schema)
