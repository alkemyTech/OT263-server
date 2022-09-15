const supertest = require('supertest')
const app = require('../../app')
const { Categories } = require('../../models')
const api = supertest(app)

describe('POST /categories', () => {
	// TODO: signup and get token. This is a token with payload {sub: 1, roleId: 1}
	const TOKEN =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlSWQiOjF9.C4nRYbT9AtBDP95tW5pyXu8HvFS3Wgx-g893vxVsIrY'

	let entry
	const name = 'First Test Category'
	const message = 'This is a test message'

	afterAll(async () => {
		await Categories.destroy({ where: { name } })
	})

	test('Should create category when valid credentials', async () => {
		await api
			.post(`/categories`)
			.send({ name, message })
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(200)
			.expect(function (res) {
				res.body.name = name
				res.body.message = message
			})
	})

	test('Should return Bad Request if invalid values are provided', async () => {
		const invalidName = ''

		await api
			.post(`/categories`)
			.send({ name: invalidName, message })
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(400)
	})
})
