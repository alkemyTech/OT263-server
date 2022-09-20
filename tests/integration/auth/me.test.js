const supertest = require("supertest");
const app = require("../../../app");
const api = supertest(app);
const { User } = require("../../../models");

describe("GET /users/auth/me", () => {
    let token;
    let entry;

    beforeAll(async () => {
        const user = {
            firstName: "John",
            lastName: "Doe",
            email: "testuser@mail.com",
            password: "123456",
        };
        const response = await api
            .post("/users/auth/register")
            .send(user)
            .set("Accept", "application/json")
            .expect(201);
        token = response.body.token;

        const userFound = await User.findOne({
            where: { email: user.email },
        });
        entry = userFound.dataValues;
    });

    afterAll(() => {
        return User.destroy({ where: { id: entry.id } });
    });

    test("Should return Success when valid credentials", async () => {
        const res = await api
            .get("/users/auth/me")
            .set("Accept", "application/json")
            .set("Authorization", `Bearer ${token}`)
            .expect(function (res) {
                res.body.createdAt = entry.createdAt;
                res.body.updatedAt = entry.updatedAt;

                expect(res.status).toBe(200);
                expect(res.body).toEqual(entry);
            });
    });
    test("Should return Bad Request when invalid credentials", async () => {
        await api
            .get("/users/auth/me")
            .set("Accept", "application/json")
            .set("Authorization", "Bearer invalidtoken")
            .expect(401);
    });
    test("Should return Bad Request when missing credentials", async () => {
        await api
            .get("/users/auth/me")
            .set("Accept", "application/json")
            .expect(401);
    });
});
