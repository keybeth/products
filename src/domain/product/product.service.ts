import { ProductContract } from "./product.contract";
import ProductRepositoryContract from "../../infrastructure/persistence/product/product.repository.contract";
import { ProductDTO } from "./product.model";

export class ProductService implements ProductContract {

    constructor(private productRepository: ProductRepositoryContract) {

    }

    async sellProduct(productId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getSoldProducts() {
        throw new Error("Method not implemented.");
    }
    async evaluateProducts(days: number): Promise<ProductDTO[]> {
        throw new Error("Method not implemented.");
    }

}