import PriceCalcContract from './price-calc.contract';
import {ProductDTO} from '../product.model';
import {PRICE_INCREASE_DOUBLE_DAYS, PRICE_INCREASE_TRIPLE_DAYS} from '../../common/constants';
import PriceUtils from '../../common/price.utils';

export default class PriceUpSpecialService implements PriceCalcContract {

    calculatePrice(product: ProductDTO, days: number): number {
        let variation;
        let sellIn = product.sellIn - days;
        if (sellIn <= 0) {
            return 0;
        } else if(sellIn <= PRICE_INCREASE_TRIPLE_DAYS) {
            variation = ((PRICE_INCREASE_TRIPLE_DAYS - sellIn + 1) * 3) + ((PRICE_INCREASE_TRIPLE_DAYS - PRICE_INCREASE_DOUBLE_DAYS) * 2) + ((product.sellIn - 1) - PRICE_INCREASE_DOUBLE_DAYS);
        } else if(sellIn <= PRICE_INCREASE_DOUBLE_DAYS) {
            variation = ((PRICE_INCREASE_DOUBLE_DAYS - sellIn + 1) * 2) + ((product.sellIn - 1) - PRICE_INCREASE_DOUBLE_DAYS);
        } else {
            variation = 1 * days;
        }
        return PriceUtils.validateMaxPrice(product.price, variation);
    }

}