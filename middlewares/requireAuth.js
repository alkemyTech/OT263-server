const { decodeToken } = require('../services/token')
const createError = require('http-errors')

const requireAuth = async (req, res, next) => {
	const { authorization } = req.headers

	if (!authorization) return res.status(401).json(createError.Unauthorized())

	const token = authorization.split(' ').pop()

	try {
		const decoded = decodeToken(token)
		req.user = decoded
		next()
	} catch (error) {
		res.status(401).json(createError.Unauthorized())
	}
}

module.exports = { requireAuth }
