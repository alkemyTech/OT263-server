const supertest = require('supertest')
const app = require('../../app')

const api = supertest(app)

describe('DELETE /users/:id', () => {
	// TODO: signup and get token. This is a token with payload {sub: 1, roleId: 1}
	const TOKEN =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjYxNjMwMjk4LCJleHAiOjE2NjIyMzUwOTh9.KAlVqAqidU1TpcRXOyOOAJj-a4J3p_RFSJqZL3hKX_c'

	test('Should return Success when valid credentials', async () => {
		await api
			.delete('/users/1')
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(204)
	})

	test('Should return Not Found when deletting an nonexistent user', async () => {
		await api
			.delete('/users/1')
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(404)
	})

	test('Should return Unauthorized when no token provided', async () => {
		await api.delete('/users/1').set('Accept', 'application/json').expect(401)
	})

	test('Should return Forbidden token user is different to params user', async () => {
		await api
			.delete('/users/3')
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(403)
	})
})
