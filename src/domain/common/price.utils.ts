import { MAX_PRICE } from "./constants";

export default class PriceUtils {

    static validateMaxPrice(price: number, variation: number): number {
        const result = price + variation;
        if(result > MAX_PRICE) {
            return MAX_PRICE;
        } else {
            return result;            
        }
    }

    static validateMinPrice(price: number, variation: number): number {
        const result = price - variation;
        if(result < 0) {
            return 0;
        } else {
            return result;            
        }
    }
}