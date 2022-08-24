const createError = require('http-errors')

const requireAdmin = async (req, res, next) => {
	const adminId = 1
	if (req.user.roleId !== adminId) return res.status(403).json(createError.Forbidden())
	next()
}

module.exports = { requireAdmin }
