const request = require('supertest')
const app = require('../../app')

const api = request(app)
const TOKEN =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsInJvbGVJZCI6MSwiaWF0IjoxNjYzNjIzOTg2LCJleHAiOjE2NjQyMjg3ODZ9.RGiWkmBaitIzFaXjiU1Tid4_fx6syTeWfl0yT5drEOw'

describe("GET /organizations/:id/public", () => {
    test("response whit json containing ong detail", async () => {
        await api.get('/organizations/1/public')
            .send()
            .expect(200)
    })
    test('response whit json "error message"', async () => {
        await api.get('/organizations/noneexistid/public')
            .send()
            .expect(404)
    })
})

describe("POST /organizations", () => {
    test("response whit 200", async () => {
        await api.post('/organizations')
            .send({
                name: "test",
                image: "image",
                phone: 123456,
                address: "address",
                welcomeText: "welcomeText"
            })
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${TOKEN}`)
            .expect(200)            
    })

    test("response whit 401 unauthorization-token none", async () => {
        await api.post('/organizations')
            .send({
                name: "test",
                image: "image",
                phone: 123456,
                address: "address",
                welcomeText: "welcomeText"
            })
            .set('Accept', 'application/json')
            .expect(401)            
    })

    test("response whit 401 unauthorization-token bad", async () => {
        await api.post('/organizations')
            .send({
                name: "test",
                image: "image",
                phone: 123456,
                address: "address",
                welcomeText: "welcomeText"
            })
            .set('Accept', 'application/json')
            .set('Authorization', `Bad token`)
            .expect(401)            
    })
})

describe("PUT /organizations", () => {
    test("response whit 200", async () => {
        await api.put('/organizations/1')
            .send({
                name: "test",
                image: "image",
                phone: 123456,
                address: "address",
                welcomeText: "welcomeText"
            })
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${TOKEN}`)
            .expect(200)            
    })

    test("response whit 404", async () => {
        await api.put('/organizations/noneexist')
            .send({
                name: "test",
                image: "image",
                phone: 123456,
                address: "address",
                welcomeText: "welcomeText"
            })
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${TOKEN}`)
            .expect(404)            
    })

    test("response whit 401, unauthorization-token none", async () => {
        await api.put('/organizations/1')
            .send({
                name: "test",
                image: "image",
                phone: 123456,
                address: "address",
                welcomeText: "welcomeText"
            })
            .set('Accept', 'application/json')            
            .expect(401)            
    })
    test("response whit 401, unauthorization-token bad", async () => {
        await api.put('/organizations/1')
            .send({
                name: "test",
                image: "image",
                phone: 123456,
                address: "address",
                welcomeText: "welcomeText"
            })
            .set('Accept', 'application/json')   
            .set('Authorization', `Bad token`)         
            .expect(401)            
    })
})