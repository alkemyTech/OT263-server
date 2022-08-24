const jwt = require('jsonwebtoken')
const createError = require('http-errors')
require('dotenv').config()

const requireAuth = async (req, res, next) => {
	const { authorization } = req.headers

	if (!authorization) return res.status(401).json(createError.Unauthorized())

	const token = authorization.split(' ').pop()

	try {
		const decoded = jwt.verify(token, process.env.PASSWORD)
		req.user = decoded
		next()
	} catch (error) {
		res.status(401).json(createError.Unauthorized())
	}
}

module.exports = { requireAuth }
