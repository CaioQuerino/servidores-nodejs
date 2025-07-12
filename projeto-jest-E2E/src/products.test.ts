import request from "supertest";
import { productRoutes } from "./routes/";
import { ControllerProducts } from "./controllers/products.controller";

const controllerProducts = new ControllerProducts();

describe("Products", () => {
    it("Create a product", async () => {
        const newProduct = { id: 4, name: "Headphones", price: 89.99 };
        const res = await request(productRoutes)
            .post("/products")
            .send(newProduct)
            .expect(201)
            .expect("Content-Type", /json/);


    })

    it("List of products", async () => {
        const res = await request(productRoutes)
            .get("/products")
            .expect(200)
            .expect("Content-Type", /json/);
        console.log(res.body)
    })

    it("Find product by ID", async () => {
        const res = await request(productRoutes)
            .get("/products/1")
            .expect(200)
            .expect("Content-Type", /json/);
        expect(res.body).toEqual({ id: 1, name: "Camiseta", price: 29.99 });
    });
})