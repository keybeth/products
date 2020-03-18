import { ProductDTO } from "./product.model";
import Sale from "../../infrastructure/persistence/sale/sale.entity";

export interface ProductContract {

    sellProduct(productId: number): Promise<void>;

    getSoldProducts(): Promise<Sale[]>;

    evaluateProducts(days: number) : Promise<ProductDTO[]>;

    updateProducts(): Promise<void>;

}