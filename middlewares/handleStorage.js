const createError = require('http-errors')
const { s3Uploadv2 } = require('../services/S3')

const handleStorage = async (req, res, next) => {
	try {
		const { Location } = await s3Uploadv2(req.file)
		req.body.image = Location

		next()
	} catch (error) {
		return res.status(500).json(error.message)
	}
}

module.exports = handleStorage
