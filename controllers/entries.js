const { Entries } = require('../models')
const Joi = require('joi')
const createError = require('http-errors')

const updateEntry = async (req, res) => {
	const { id } = req.params
	const updates = req.body
	try {
		const { error } = validateEntry(updates)
		if (error) return res.status(400).json(createError.BadRequest(error.details[0].message))

		const response = await Entries.findOne({ where: { id } })
		if (!response) return res.status(404).json(createError.NotFound())

		const [updatedRow] = await Entries.update(updates, { where: { id } })

		const entry = response.dataValues
		if (updatedRow) return res.status(200).json({ ...entry, ...updates })
	} catch (error) {
		if (error.fields)
			return res.status(400).json(createError.BadRequest(error.original.sqlMessage))
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
