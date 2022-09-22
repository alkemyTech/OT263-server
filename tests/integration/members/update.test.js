const supertest = require('supertest')
const app = require('../../../app')
const { Member } = require('../../../models')
const api = supertest(app)

describe('PUT /members/:id', () => {
  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjYxNjMwMjk4LCJleHAiOjE2NjIyMzUwOTh9.KAlVqAqidU1TpcRXOyOOAJj-a4J3p_RFSJqZL3hKX_c'
  const name = "testNameCreate"
  const image = 'https://images.unsplash.com/photo-1602622660687-db571538bff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'

  let value

  beforeAll(async () => {
    await api
      .post("/members/")
      .send({name, image})
      .set("Accept", "application/json")
      .set('Authorization', `Bearer ${TOKEN}`)
      .expect(201);

    const dataValue = await Member.findOne({ where: { name } })
    value = dataValue
  })

  afterAll(async () => {
		await Member.destroy({ where: { id: value.id } })
	})

  test('Should return Success when valid credentials', async () => {
		const newName = 'Update Name Test Member'

		await api
			.put(`/members/${value.id}`)
			.send({ name: newName })
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(200)
			.expect(function (res) {
				res.body.id = value.id
				res.body.name = newName
			})
	})

  test('Should return Not Found when updating an nonexistent member', async () => {
		const inexistentId = 999
		await api
			.put(`/members/${inexistentId}`)
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(404)
	})

  test('Should return Bad Request if invalid values are provided', async () => {
		const invalidName = ''

		await api
			.put(`/members/${value.id}`)
			.send({ name: invalidName })
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(400)
	})
})