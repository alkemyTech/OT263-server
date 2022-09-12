const { Categories } = require('../models')
const createError = require('http-errors')

const deleteCategory = async (req, res) => {
	const { id } = req.params
	try {
		const row = await Categories.destroy({ where: { id } })
		if (!row) return res.status(404).json(createError.NotFound())

		return res.status(204).send()
	} catch (error) {
		return res.status(500).json(createError.InternalServerError())
	}
}

module.exports = { deleteCategory }
