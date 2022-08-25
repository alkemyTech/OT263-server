const jwt = require('jsonwebtoken')
require('dotenv').config()

const createToken = payload => {
	return jwt.sign(payload, process.env.PASSWORD, { expiresIn: '7 days' })
}

const decodeToken = token => {
	return jwt.verify(token, process.env.PASSWORD)
}

module.exports = { createToken, decodeToken }
