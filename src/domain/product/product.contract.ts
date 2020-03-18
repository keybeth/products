import { ProductDTO } from "./product.model";

export interface ProductContract {

    sellProduct(productId: number): Promise<void>;

    getSoldProducts();

    evaluateProducts(days: number) : Promise<ProductDTO[]>;

}