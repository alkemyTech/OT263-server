const supertest = require("supertest");
const app = require("../../../app");
const api = supertest(app);
const { User } = require("../../../models");


// Testing the register route
describe("POST /auth/register", () => {
    let entry;
    const firstName = "Test";
    const lastName = "User";
    const email = "testuser@mail.com";
    const password = "123456";

    afterAll(() => {
        return User.destroy({ where: { email } });
    });

    test("Should return Success when valid credentials", async () => {
        const res = await api
            .post("/users/auth/register")
            .send({ firstName, lastName, email, password })
            .set("Accept", "application/json");
        expect(res.status).toBe(201);
        expect(res.body).toEqual({ token: expect.any(String) });
    });

    test("Should return Bad Request when invalid credentials", async () => {
        const invalidEmail = "invalidmail";

        await api
            .post("/users/auth/register")
            .send({ firstName, lastName, email: invalidEmail, password })
            .set("Accept", "application/json")
            .expect(400);
    });

    test("Should return Bad Request when missing credentials", async () => {
        await api
            .post("/users/auth/register")
            .send({ firstName, lastName, email })
            .set("Accept", "application/json")
            .expect(400);
    });
});


