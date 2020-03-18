import ProductRepositoryContract from "./product.repository.contract";
import Product from "./product.entity";
import { ProductService } from "../../../domain/product/product.service";

export default class ProductRepository implements ProductRepositoryContract {
    private products: Product[];

    constructor() {
        this.products = [
            Product.fromFields(1, 'Cobertura', 10, 20, 'DOWN'),
            Product.fromFields(2, 'Full cobertura', 2, 0, 'UP'),
            Product.fromFields(3, 'Baja cobertura', 5, 7, 'DOWN'),
            Product.fromFields(4, 'Mega cobertura', 0, 80, 'FIXED'),
            Product.fromFields(5, 'Mega cobertura', -1, 80, 'FIXED'),
            Product.fromFields(6, 'Full cobertura super duper', 15, 20, 'UP_SPECIAL'),
            Product.fromFields(7, 'Full cobertura super duper', 10, 49, 'UP_SPECIAL'),
            Product.fromFields(8, 'Full cobertura super duper', 5, 49, 'UP_SPECIAL'),
            Product.fromFields(9, 'Super avance', 3, 6, 'DOUBLE_DOWN')
        ];
    }

    async findAll(): Promise<Product[]> {
        return this.products;
    }
    
}