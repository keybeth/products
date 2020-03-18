import PriceCalcContract from './price-calc.contract';
import {ProductDTO} from '../product.model';
import {MAX_PRICE} from '../../common/constants';

export default class PriceFixedService implements PriceCalcContract {

    calculatePrice(product: ProductDTO, days: number): number {
        return product.price;
    }

}