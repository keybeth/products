import { ProductContract } from "./product.contract";
import ProductRepositoryContract from "../../infrastructure/persistence/product/product.repository.contract";
import { ProductDTO, ProductRule } from "./product.model";
import PriceCalcContract from "./calculation/price-calc.contract";
import PriceDoubleDownService from "./calculation/price-double-down.service";
import PriceUpService from "./calculation/price-up.service";
import PriceFixedService from "./calculation/price-fixed.service";
import PriceUpSpecialService from "./calculation/price-up-special.service";
import PriceDownService from "./calculation/price-down.service";
import logger from "../../infrastructure/config/logger";

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
        const products = await this.productRepository.findAll();
        return products.map(product => {
            const {id, description, sellIn, price, rule} = product;
            const productDTO = ProductDTO.fromFields(id, description, sellIn, price, ProductRule[rule]);
            if(days > 0) {
                productDTO.price = this.getPriceStrategy(productDTO.rule).calculatePrice(productDTO, days);
                productDTO.sellIn = product.sellIn - days;
            }
            return productDTO;
        });
    }
    private getPriceStrategy(productRule: ProductRule): PriceCalcContract {    
        let priceStrategy: PriceCalcContract;
        switch(productRule) {
            case ProductRule.DOUBLE_DOWN:                
                priceStrategy = new PriceDoubleDownService();
                break;
            case ProductRule.FIXED:
                priceStrategy = new PriceFixedService();
                break;
            case ProductRule.UP:
                priceStrategy = new PriceUpService()
                break;
            case ProductRule.UP_SPECIAL:
                priceStrategy = new PriceUpSpecialService();
                break;
            case ProductRule.DOWN:
                priceStrategy = new PriceDownService();
                break;
            default:
                priceStrategy = new PriceDownService();
        }
        logger.debug(`PriceStrategy: ${priceStrategy.constructor.name} para rule: ${productRule}`);
        return priceStrategy;
    }

}