const supertest = require('supertest')
const app = require('../../app')
const { Categories } = require('../../models')
const api = supertest(app)

describe('DELETE /categories/:id', () => {
  // TODO: signup and get token. This is a token with payload {sub: 1, roleId: 1}
  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlSWQiOjF9.C4nRYbT9AtBDP95tW5pyXu8HvFS3Wgx-g893vxVsIrY'

  let category
  let name = 'Test Category'

  beforeAll(async () => {
    await Categories.create({
      name,
      description: 'This description is for testing purposes'
    })

    const { dataValues } = await Categories.findOne({ where: { name } })
    category = dataValues
  })

  afterAll(async () => {
    await Categories.destroy({ where: { id: category.id } })
  })

  test('Should return Success when valid category id', async () => {
    await api
      .delete(`/categories/${category.id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${TOKEN}`)
      .expect(204)
  })

  test('Should return Not Found when deleteing an nonexistent category', async () => {
    const inexistentId = 999
    await api
      .delete(`/categories/${inexistentId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${TOKEN}`)
      .expect(404)
  })
})

describe('POST /categories', () => {
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
