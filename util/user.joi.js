const Joi = require('joi');

const userData = Joi.object({
    firstName: Joi.string().min(2).max(30),
    lastName: Joi.string().min(2).max(30),
    email: Joi.string().email(),
    password: Joi.string().min(5),
});

const createUserSchema = Joi.object({
    firstname: userData.required(),
    lastname: userData.required(),
    email: userData.required(),
    password: userData.required(),
})   
const findUserSchema = Joi.object({
    id: Joi.number().integer().required(),
})

const updateUserSchema = Joi.object({
    ...userData,
})


const loginUserSchema = Joi.object({
    email: userData.required(),
    password: userData.required(),
})

module.exports = {
    createUserSchema,
    updateUserSchema,
    findUserSchema,
    loginUserSchema,
}


