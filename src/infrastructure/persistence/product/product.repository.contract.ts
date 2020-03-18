import Product from "./product.entity";

export default interface ProductRepositoryContract {
    findAll(): Promise<Product[]>;

    findById(id: number): Promise<Product>;
}