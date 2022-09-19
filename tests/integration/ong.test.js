const request = require('supertest')
const app = require('../../app')

const api = request(app)


describe("GET /organizations/:id/public", () => {
    test("response whit json containing ong detail", async () => {
        await api.get('/organizations/1/public')
            .send()
            .expect(200)
    })
    test('response whit json "error message"', async () => {
        await api.get('/organizations/15/public')
            .send()
            .expect(404)
    })
})

describe("POST /organizations", () => {
    test("response whit ....", async () => {
        await api.post('/organizations')
            .send({
                name: "test",
                image: "image",
                phone: 123456,
                address: "address",
                welcomeText: "welcomeText"
            })
            .set('Accept', 'application/json')
            .expect(200)            
    })
})