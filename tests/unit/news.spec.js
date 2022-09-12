const request = require("supertest");
const baseURL = "http://localhost:3001";

describe("POST method test", ()=> {
    const DTO = {
        name : "name", 
        content : "content", 
        image : "image", 
        categoryId : 1,
        type : 'news'
    };
    it("should return status code 200", async()=> {
        const response = await request(baseURL).post("/news").send(DTO);
        const name = response.body["name"];
        expect(response.statusCode).toBe(200)        
        expect(name).toBe(DTO["name"]);
        
    });
    it("should return body name and content equals name and content", async()=> {
        const response = await request(baseURL).post("/news").send(DTO);
        const { name, content } = response.body;       
        expect(name).toBe(DTO["name"]);
        expect(content).toBe(DTO["content"]);
    });
});

