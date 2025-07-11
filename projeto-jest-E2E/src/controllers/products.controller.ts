// products.controller.ts
interface Product {
    id: number;
    name: string;
    price: number;
}

export class ControllerProducts {
    private products: Product[] = []

    public create(product: Product) {
        this.products.push(product)
        return product
    }

    public list() {
        return this.products
    }

    public findById(id: number): Product | undefined {
        return this.products.find(product => product.id === id)
    }
}