const { User } = require('../models/')
const createError = require('http-errors')

class UserController {
	constructor() {}

	async getUserById(id) {
		const user = await User.findByPk(id)
		if (!user) {
			throw createError.NotFound('User not found')
		}
		return user
	}

	async deleteUser(req, res) {
		const { sub: id } = req.user
		try {
			if (id != req.params.id) return res.status(403).json(createError.Forbidden())

			const row = await User.destroy({ where: { id } })
			if (!row) return res.status(404).json(createError.NotFound())

			return res.status(204).send()
		} catch (error) {
			return res.status(500).json(createError.InternalServerError())
		}
	}
}

module.exports = UserController
