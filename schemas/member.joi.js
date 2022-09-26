const Joi = require('joi');

const name = Joi.string().alphanum().min(3).max(30);
const image = Joi.string().uri();

const createMemberSchema = Joi.object({
  name: name.required(),
  image: image.required(), 
});

const updateMemberSchema = Joi.object({
  name,
  image,
});

const findMemberSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
});

module.exports = {
  createMemberSchema,
  updateMemberSchema,
  findMemberSchema,
};
