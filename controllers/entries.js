const { Entries } = require('../models')
const createError = require('http-errors')

const updateEntry = async (req, res) => {
	const { id } = req.params
	try {
		const entry = await Entries.findOne({ where: { id } })
		if (!entry) return res.status(404).json(createError.NotFound())
		return res.status(200).json(entry)
	} catch (error) {
		console.log(error)
		return res.status(500).json(createError.InternalServerError())
	}
}

module.exports = { updateEntry }
