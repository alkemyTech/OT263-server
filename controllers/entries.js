const { Entries } = require('../models/entries')
const createError = require('http-errors')

const updateEntry = async (req, res) => {
	const { id } = req.params
	const entry = await Entries.findOne({ where: { id } })
	if (!entry) return res.status(404).json(createError.NotFound())
	else {
		console.log(project instanceof Project) // true
		console.log(project.title) // 'My Title'
	}
}

module.exports = { updateEntry }
