import {ProductDTO} from '../product.model';

export default interface PriceCalcContract {
    
    calculatePrice(product: ProductDTO, days: number): number;
}