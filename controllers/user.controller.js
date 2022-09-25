const { User } = require('../models/');
const createError = require('http-errors');

class UserController {
    constructor() {}

    async getUsers(req, res, next) {
        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }

    async getMe(req, res, next) {
		const { id } = req.user.sub;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw createError.NotFound('User not found');
            }
            return res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    }

    async updateUser(req, res, next) {
        const { id } = req.params;
        const updatedUser = req.body;
        try {
            const [row] = await User.update(updatedUser, { where: { id } });
            if (!row) throw createError.NotFound('Usuario no encontrado');

            return res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req, res, next) {
		const { id } = req.params;
        try {
            const row = await User.destroy({ where: { id } });
            if (!row) throw createError.NotFound('Usuario no encontrado');

            return res.status(204).send();
        } catch (error) {
			next(error);
		}
    }
}

module.exports = UserController;
