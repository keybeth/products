import PriceCalcContract from './price-calc.contract';
import {ProductDTO} from '../product.model';
import PriceUtils from '../../common/price.utils';

export default class PriceUpService implements PriceCalcContract {

    calculatePrice(product: ProductDTO, days: number): number {
        let variation = 1 * days;
        return PriceUtils.validateMaxPrice(product.price, variation);
    }

}