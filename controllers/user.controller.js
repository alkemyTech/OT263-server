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
		if(id != req.params.id) return res.status(403).json(createError.Forbidden())
		try {
			const row = await User.destroy({ where: { id } })
			if (!row) return res.status(404).json(createError.NotFound())

			return res.status(204).send()
		} catch (error) {
			return res.status(500).json(createError.InternalServerError())
		}
	}
    async getUserById(id) {
        const user = await User.findByPk(id);
        if (!user) {
            throw createError.NotFound("User not found");
        }
        return user;
    }

    async getUsers(req, res){
        try{
            return res.status(200).json(await User.findAll())
        }catch(err){
            return res.status(404).send({message:err.message})
        }
    }

	async updateUser(req, res){
		const { sub: id } = req.user
		if(id != req.params.id) return res.status(403).json(createError.Forbidden())
		try{
			const user = await User.update(req.body, {where: {id}})
			if(!user) return res.status(404).json(createError.NotFound())
			return res.status(200).json(user)
		}catch(err){
			return res.status(500).json(createError.InternalServerError())
		}
	}
}

module.exports = UserController
