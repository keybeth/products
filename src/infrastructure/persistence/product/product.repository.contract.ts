import Product from "./product.entity";

export default interface ProductRepositoryContract {
    findAll(): Product[];
}