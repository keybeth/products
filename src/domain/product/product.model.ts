export class ProductDTO {
    id: number;
    description: string;
    sellIn: number;
    price: number;
    rule: ProductRule;
}
export enum ProductRule {
    UP = 'UP',
    FIXED = 'FIXED_NOT_EXPIRE',
    DOWN = 'DOWN',
    DOUBLE_DOWN = 'DOUBLE_DOWN',
    UP_SPECIAL = 'UP_SPECIAL'
}