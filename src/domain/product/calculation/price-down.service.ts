import PriceCalcContract from './price-calc.contract';
import {ProductDTO} from '../product.model';
import PriceUtils from '../../common/price.utils';

export default class PriceDownService implements PriceCalcContract {

    calculatePrice(product: ProductDTO, days: number): number {
        let variation = 1 * days;
        const sellIn = product.sellIn - days;
        if(sellIn < 0) {
            variation = variation * Math.abs(sellIn);
        }
        return PriceUtils.validateMinPrice(product.price, variation);
    }

}