const supertest = require("supertest");
const app = require("../../../app");
const api = supertest(app);
const { User } = require("../../../models");

// Testing the login route
describe("POST /auth/login", () => {
    const email = "testlogin@mail.com";
    const password = "123456";

    beforeAll(async () => {
        const user = {
            firstName: "test",
            lastName: "login",
            email,
            password,
        };
        await api
            .post("/users/auth/register")
            .send(user)
            .set("Accept", "application/json")
            .expect(201);
    });

    afterAll(() => {
        return User.destroy({ where: { email } });
    });

    test("Should return Success when valid credentials", async () => {
        const res = await api
            .post("/users/auth/login")
            .send({ email, password })
            .set("Accept", "application/json");
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ token: expect.any(String) });
    });

    test("Should return Bad Request when invalid credentials", async () => {
        const invalidEmail = "invalidmail@mail.com";
        const invalidPassword = "invalidpassword";

        await api
            .post("/users/auth/login")
            .send({ email, password: invalidPassword })
            .set("Accept", "application/json")
            .expect(400);

        await api
            .post("/users/auth/login")
            .send({ email: invalidEmail, password })
            .set("Accept", "application/json")
            .expect(400);
    });

    test("Should return Bad Request when missing credentials", async () => {
        await api
            .post("/users/auth/login")
            .send({ email })
            .set("Accept", "application/json")
            .expect(400);

        await api
            .post("/users/auth/login")
            .send({ password })
            .set("Accept", "application/json")
            .expect(400);
    });
});
