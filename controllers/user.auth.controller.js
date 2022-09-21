const { User } = require("../models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const schema = require("../util/user.joi");
const { createHash } = require("../util/bycrypt");
const { createToken } = require("../services/token");
const createHttpError = require("http-errors");

const createTokenLogin = async (req) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
        throw createHttpError(400, "Invalid credentials. Please check your email and password.");
    } else {
        const token = bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                throw createHttpError(400, "Invalid credentials. Please check your email and password.");
            }
            const payload = { sub: user.id, roleId: user.roleId };
            const token = createToken(payload);
            return token;
        });
        return token;
    }
};

const createUser = async (req, res) => {
  try {
    const value = await schema.validateAsync({ ...req.body })
    await User.create({
      ...value,
      password: createHash(value.password)
    })
    const newUserToken = await createTokenLogin(req, res)

    return res.status(201).json({ token: newUserToken })
  } catch (err) {
    return res.status(400).json(err)
  }
}

const loginUser = async function (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const token = await createTokenLogin(req);
        return res.json({ token: token });
    } catch (err) {
        return res.status(400).json(err);
    }
};

module.exports = {
  loginUser,
  createUser
}
