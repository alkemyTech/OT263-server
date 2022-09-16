const createError = require('http-errors')
const { s3Uploadv2 } = require('../services/S3')

const handleStorage = async (req, res, next) => {
	if (!req.file) next()

	try {
		const { Location } = await s3Uploadv2(req.file)
		req.image = Location

		next()
	} catch (error) {
		res.status(500).json(createError.InternalServerError())
	}
}

module.exports = { handleStorage }
