import ProductRepositoryContract from "./product.repository.contract";
import Product from "./product.entity";
import logger from '../../../infrastructure/config/logger';

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
    async findById(id: number): Promise<Product> {
        logger.debug(`Init findById, id = ${id}`);
        const productsFiltered = this.products.filter(product => product.id === id);
        if(productsFiltered.length > 0) {
            logger.debug(`Producto encontrado id = ${productsFiltered[0].description}`);
            return productsFiltered[0];
        } else {
            logger.error(`No existe el producto con el id = ${id}`);
            throw new Error(`No existe el producto con el id = ${id}`);
        }
    }

    async findAll(): Promise<Product[]> {
        logger.debug(`Init findAll`);
        return this.products;
    }

    
    async update(product: Product): Promise<void> {
        const productIndex = this.products.findIndex(prev => prev.id === product.id);
        if(productIndex >= 0) {
            logger.debug(`Producto encontrado id = ${ this.products[productIndex].description}`);
            this.products[productIndex] = product;
        } else {
            logger.error(`No existe el producto con el id = ${product.id}`);
            throw new Error(`No existe el producto con el id = ${product.id}`);
        }
    }
    
}