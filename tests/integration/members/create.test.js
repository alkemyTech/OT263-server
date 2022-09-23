const supertest = require('supertest')
const app = require('../../../app')
const { Member } = require('../../../models')
const api = supertest(app)


describe('POST /members', () => {
  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjYzODg2MDA5LCJleHAiOjE2NjQ0OTA4MDl9.8qhjewhONNWte0ArHBslL3XhPIlrAEtjC061OVpzeHg'
  const name = "testNameCreate"
  const image = 'https://images.unsplash.com/photo-1602622660687-db571538bff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'

  afterAll(async () => {
		await Member.destroy({ where: { name: "testNameCreate" } })
	})

  test('Should return Success when valid credentials', async () => {
		await api
			.post(`/members`)
			.send({name, image})
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(200)
	})

  test('Should return Bad Request when invalid credentials', async () => {
		const invalidName = ''

		await api
			.post(`/members/`)
			.send({ name: invalidName })
			.set('Accept', 'application/json')
			.set('Authorization', `Bearer ${TOKEN}`)
			.expect(500)
	})

  test("Should return Bad Request when missing credentials", async () => {
    await api
      .post("/members/")
      .send({name, image})
      .set("Accept", "application/json")
      .expect(401);
  });
})