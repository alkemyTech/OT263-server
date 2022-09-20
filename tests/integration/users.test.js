const supertest = require('supertest')
const app = require('../../app')
const { createToken } = require('../../services/token')

const api = supertest(app)

describe('/users', () => {
  let TOKEN

  const testUser = {
    firstName: 'tester',
    lastName: 'user',
    email: 'test@mal.com',
    password: 'test123'
  }

  beforeAll(() => {
    TOKEN = createToken({
      sub: 1,
      roleId: 1,
      email: 'admin@somos-mas.org',
      password: 'adminpassword'
    })
  })

  describe('POST /auth/register', () => {
    test('Should register the user when valid credentials', async () => {
      await api
        .post('/users/auth/register')
        .set('Accept', 'application/json')
        .send(testUser)
        .expect(201)
    })

    test('Should return error when invalid or missing credentials', async () => {
      await api.post('/users/auth/register').set('Accept', 'application/json').send({}).expect(400)
    })
  })

  describe('POST /auth/login', () => {
    test('Should login user when valid credentials', async () => {
      await api
        .post('/users/auth/login')
        .set('Accept', 'application/json')
        .send(testUser)
        .expect(200)
        .expect((err, res) => {
          if (err) {
            throw err
          }
          expect(res.body).should.have.property('token')
          return res.body.token
        })
    })

    test('Should return error when invalid credentials', async () => {
      const invalidUser = {
        email: 'thisis@invalid.mail',
        password: 'alsoAnInvalidPassword'
      }

      await api
        .post('/users/auth/login')
        .set('Accept', 'application/json')
        .send(JSON.stringify(invalidUser))
        .expect(400)
        .expect((err, res) => {
          if (err) {
            throw err
          }
          expect(res.body).should.have.property('errors')
          return res.body.errors
        })
    })
  })

  describe('GET /', () => {
    test('Should return users when user is admin', async () => {
      await api
        .get('/users')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
    })

    test('Should return error when no token provided', async () => {
      await api.get('/users').set('Accept', 'application/json').expect(401)
    })
  })

  describe('GET /auth/me', () => {
    test('Should return user when valid id', async () => {
      await api
        .get('/users/auth/me')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
    })
  })

  // describe('DELETE /users/:id', () => {
  //   test('Should return Success when valid credentials', async () => {
  //     await api
  //       .delete('/users/1')
  //       .set('Accept', 'application/json')
  //       .set('Authorization', `Bearer ${TOKEN}`)
  //       .expect(204)
  //   })

  //   test('Should return Not Found when deletting an nonexistent user', async () => {
  //     await api
  //       .delete('/users/1')
  //       .set('Accept', 'application/json')
  //       .set('Authorization', `Bearer ${TOKEN}`)
  //       .expect(404)
  //   })

  //   test('Should return Unauthorized when no token provided', async () => {
  //     await api.delete('/users/1').set('Accept', 'application/json').expect(401)
  //   })

  //   test('Should return Forbidden token user is different to params user', async () => {
  //     await api
  //       .delete('/users/3')
  //       .set('Accept', 'application/json')
  //       .set('Authorization', `Bearer ${TOKEN}`)
  //       .expect(403)
  //   })
  // })
})
