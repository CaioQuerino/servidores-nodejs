import request from "supertest";
import { app } from "./app";

describe("Products", () => {
    it("List of products", async () => {
        const res = await request(app)
            .get("/products")
            .expect(200)
            .expect("Content-Type", /json/);
        console.log(res.body)
    })
})