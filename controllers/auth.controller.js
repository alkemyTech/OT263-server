const { User } = require('../models');
const bcrypt = require('bcrypt');
const { createHash } = require('../util/bycrypt');
const { createToken } = require('../services/token');
const createHttpError = require('http-errors');

const createUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: createHash(password),
        });
        const payload = { sub: newUser.id };
        const newUserToken = createToken(payload);

        return res.status(201).json({ token: newUserToken });
    } catch (err) {
        next(err);
    }
};

const loginUser = async function (req, res, next) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            throw createHttpError(
                400,
                'Credenciales invalidas. Por favor revise su email y su password.'
            );
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw createHttpError(
                400,
                'Credenciales invalidas. Por favor revise su email y su password.'
            );
        }

        const payload = { sub: user.id, roleId: user.roleId };
        const token = createToken(payload);

        return res.status(200).json({ token: token });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    loginUser,
    createUser,
};
