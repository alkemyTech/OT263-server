const { User } = require('../models');
const bcrypt = require('bcrypt');
const { createHash } = require('../util/bycrypt');
const { createToken } = require('../services/token');
const createHttpError = require('http-errors');

const createTokenLogin = async (req) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
        throw createHttpError(
            400,
            'Credenciales invalidas. Por favor revise su email y su password.'
        );
    } else {
        const token = bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                throw createHttpError(
                    400,
                    'Credenciales invalidas. Por favor revise su email y su password.'
                );
            }
            const payload = { sub: user.id, roleId: user.roleId };
            const token = createToken(payload);
            return token;
        });
        return token;
    }
};

const createUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: createHash(password),
        });
        const newUserToken = await createTokenLogin(req);

        return res.status(201).json({ token: newUserToken });
    } catch (err) {
        next(err);
    }
};

const loginUser = async function (req, res, next) {
    try {
        const token = await createTokenLogin(req);
        return res.status(200).json({ token: token });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    loginUser,
    createUser,
};
