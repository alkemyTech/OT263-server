const { Entries } = require('../models')
const Joi = require('joi')
const createError = require('http-errors')

const updateEntry = async (req, res) => {
	const { id } = req.params
	const newEntry = req.body
	try {
		const { error } = validateEntry(newEntry)
		if (error) return res.status(400).json(createError.BadRequest(error.details[0].message))

		const [isUpdated] = await Entries.update(newEntry, { where: { id } })
		if (!isUpdated) return res.status(404).json(createError.NotFound())

		return res.status(200).json(newEntry)
	} catch (error) {
		if (error.fields) return res.status(400).json(createError.BadRequest(error.original.sqlMessage))
		return res.status(500).json(createError.InternalServerError())
	}
}

function validateEntry(entry) {
	const schema = Joi.object({
		name: Joi.string().min(2).max(45),
		content: Joi.string().min(2),
		image: Joi.string().uri(),
		categoryId: Joi.number().min(1),
		type: Joi.string().min(2).max(45)
	})

	return schema.validate(entry)
}

module.exports = { updateEntry }
