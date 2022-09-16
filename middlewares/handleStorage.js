const createError = require('http-errors')
const { s3Uploadv2 } = require('../services/S3')

const handleStorage = async (req, res, next) => {
	if (!req.file) {
		next()
		return
	}
	try {
		const { Location } = await s3Uploadv2(req.file)
		req.body.image = Location

		next()
	} catch (error) {
		return res.status(500).json(createError.InternalServerError())
	}
}

module.exports = handleStorage
