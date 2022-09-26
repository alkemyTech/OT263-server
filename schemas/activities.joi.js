const Joi = require('joi');

const createActivitySchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  content: Joi.string().required(),
})

const updateActivitySchema = Joi.object({
  name: Joi.string(),
  image: Joi.string(),
  content: Joi.string(),
})

const findActivitySchema = Joi.object({
  id: Joi.number().required(),
})

module.exports = {
  createActivitySchema,
  updateActivitySchema,
  findActivitySchema,
}
