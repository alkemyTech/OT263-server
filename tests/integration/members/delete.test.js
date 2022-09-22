const supertest = require('supertest')
const app = require('../../../app')
const { Member } = require('../../../models')
const api = supertest(app)

describe('DELETE /members/:id', () => {
  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjYxNjMwMjk4LCJleHAiOjE2NjIyMzUwOTh9.KAlVqAqidU1TpcRXOyOOAJj-a4J3p_RFSJqZL3hKX_c'
  const name = "testNameDelete"
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

  test('Should return Success when valid member id', async () => {
    await api
      .delete(`/members/${value.id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${TOKEN}`)
      .expect(200)
  })

  test('Should return Not Found when deleteing an nonexistent member', async () => {
    const inexistentId = 999
    await api
      .delete(`/members/${inexistentId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${TOKEN}`)
      .expect(404)
  })

  test('Should return Unauthorized when no token provided', async () => {
		await api
      .delete(`/members/${value.id}`)
      .set('Accept', 'application/json')
      .expect(401)
	})
})