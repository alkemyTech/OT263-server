const { requireAuth } = require('../../../middlewares/requireAuth')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')
require('dotenv').config()

describe('requireAuth middleware', () => {
	it('should populate req.user with the payload of a valid JWT', () => {
		const user = {
			firstName: 'testFirstName',
			lastName: 'testLastName',
			email: 'test@mail.com',
			image: 'testImageURL',
			password: 'testPassword',
			roleId: 1,
			deletedAt: new Date().toISOString()
		}

		const token = jwt.sign(user, process.env.PASSWORD)

		const req = {
			headers: { authorization: `bearer ${token}` }
		}
		const res = jest.fn()
		const next = jest.fn()

		requireAuth(req, res, next)

		expect(req.user).toMatchObject(user)
	})

	it('should not populate req.user and return error response if not valid JWT is provided', () => {
		const invalidToken = 'THISISDEFINITELYNOTAVALIDTOKEN'

		const req = {
			headers: { authorization: `bearer ${invalidToken}` }
		}
		const res = {
			send: jest.fn(),
			json: jest.fn(),
			status: function (status) {
				expect(status).toBe(401)
				return this
			}
		}
		const next = jest.fn()

		requireAuth(req, res, next)

		expect(req.user).not.toBeDefined()
		expect(res.json).toBeCalledWith(createError.Unauthorized())
	})

	it('should not populate req.user and return error response if no token is provided ', () => {
		const req = {
			headers: {}
		}
		res = {
			send: jest.fn(),
			json: jest.fn(),
			status: function (status) {
				expect(status).toBe(401)
				return this
			}
		}
		const next = jest.fn()

		requireAuth(req, res, next)

		expect(req.user).not.toBeDefined()
		expect(res.json).toBeCalledWith(createError.Unauthorized())
	})
})
