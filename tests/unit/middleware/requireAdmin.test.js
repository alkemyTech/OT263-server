const { requireAdmin } = require('../../../middlewares/requireAdmin')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')
require('dotenv').config()

describe('requireAdmin middleware', () => {
	it('should call next() if the usr is admin', () => {
		const req = {
			user: {
				roleId: 1
			}
		}
		const res = jest.fn()
		const next = jest.fn()

		requireAdmin(req, res, next)

		expect(next).toBeCalled()
	})

	it('should return a forbiden response if the user is not admin', () => {
		const req = {
			user: {
				roleId: 2
			}
		}
		const res = {
			send: jest.fn(),
			json: jest.fn(),
			status: function (status) {
				expect(status).toBe(403)
				return this
			}
		}
		const next = jest.fn()

		requireAdmin(req, res, next)

		expect(res.json).toBeCalledWith(createError.Forbidden())
	})
})
