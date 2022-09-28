const Joi = require('joi');

const id = Joi.number().integer().min(1).required();
const firstName = Joi.string().min(2).max(30);
const lastName = Joi.string().min(2).max(30);
const email = Joi.string().email();
const password = Joi.string().min(6).max(30);

const findUserSchema = Joi.object({
    id,
});

const createUserSchema = Joi.object({
    firstName: firstName.required(),
    lastName: lastName.required(),
    email: email.required(),
    password: password.required(),
});

const updateUserSchema = Joi.object({
    firstName,
    lastName,
    email,
    password,
});

const loginUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
});

module.exports = {
    createUserSchema,
    updateUserSchema,
    findUserSchema,
    loginUserSchema,
};
