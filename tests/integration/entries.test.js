const supertest = require('supertest')
const app = require('../../app')
const { Entries } = require('../../models')
const api = supertest(app)

describe('PUT /news/:id', () => {
	// TODO: signup and get token. This is a token with payload {sub: 1, roleId: 1}
	const TOKEN =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjYxNjMwMjk4LCJleHAiOjE2NjIyMzUwOTh9.KAlVqAqidU1TpcRXOyOOAJj-a4J3p_RFSJqZL3hKX_c'

	let entry

	beforeAll(async () => {
		await Entries.create({
			name: 'Test activity',
			content: 'Great activity',
			image: 'https://images.unsplash.com/photo-1602622660687-db571538bff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
			categoryId: 1,
			type: 'Entry'
		})

		const { dataValues } = await Entries.findOne({ where: { name: 'Test activity' } })
		entry = dataValues
	})

	afterAll(async () => {
		await Entries.destroy({ where: { id: entry.id } })
	})

	test('Should return Success when valid credentials', async () => {
		const newName = 'First Test Activity'

		await api
			.put(`/news/${entry.id}`)
			.send({ name: newName })
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(200)
			.expect(function (res) {
				res.body.id = entry.id
				res.body.name = newName
			})
	})

	test('Should return Not Found when updating an nonexistent entry', async () => {
		const inexistentId = 999
		await api
			.put(`/news/${inexistentId}`)
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(404)
	})

	test('Should return Bad Request if invalid values are provided', async () => {
		const invalidName = ''

		await api
			.put(`/news/${entry.id}`)
			.send({ name: invalidName })
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(400)
	})

	test('Should return Bad Request if invalid categoryId is provided', async () => {
		const invalidCategoryId = 999

		await api
			.put(`/news/${entry.id}`)
			.send({ categoryId: invalidCategoryId })
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(400)
	})
})
