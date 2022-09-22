const supertest = require('supertest')
const app = require('../../app')
const { createToken } = require('../../services/token')
const { User } = require('../../models')

const api = supertest(app)

describe('/users', () => {
  let ADMIN_USER
  let ADMIN_TOKEN
  let REGULAR_USER
  let USER_TOKEN

  beforeAll(async () => {
    const testUser = {
      firstName: 'tester',
      lastName: 'user',
      email: 'test@mal.com',
      password: 'test123'
    }

    const adminUser = {
      firstName: 'tester',
      lastName: 'admin',
      email: 'admin@mal.com',
      password: 'test123',
      roleId: 1
    }

    await User.create(adminUser).then(({ dataValues: user }) => {
      user.sub = user.id
      ADMIN_TOKEN = createToken(user)
      ADMIN_USER = user
    })

    await User.create(testUser).then(({ dataValues: user }) => {
      user.sub = user.id
      USER_TOKEN = createToken(user)
      REGULAR_USER = user
    })
  })

  afterAll(() => {
    User.destroy({ where: { firstName: REGULAR_USER.firstName } })
  })

  describe('GET /', () => {
    test('Should return users when user is admin', async () => {
      await api
        .get('/users')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .expect(200)
    })

    test('Should return error when no token provided', async () => {
      await api.get('/users').set('Accept', 'application/json').expect(401)
    })
  })

  describe('DELETE /users/:id', () => {
    test('Should return Success when valid credentials', async () => {
      await api
        .delete(`/users/${REGULAR_USER.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${USER_TOKEN}`)
        .expect(204)
    })

    test('Should return Not Found when deletting an nonexistent user', async () => {
      const fakeUser = { sub: 999 }
      const fakeUserToken = createToken(fakeUser)

      await api
        .delete(`/users/999`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${fakeUserToken}`)
        .expect(404)
    })

    test('Should return Unauthorized when no token provided', async () => {
      await api.delete('/users/1').set('Accept', 'application/json').expect(401)
    })

    test('Should return Forbidden token user is different to params user', async () => {
      await api
        .delete(`/users/${ADMIN_USER.id + 1}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .expect(403)
    })
  })
})
