export class ProductDTO {
    id: number;
    description: string;
    sellIn: number;
    price: number;
    rule: ProductRule;

    static fromFields(id: number, description: string, sellIn: number, price: number, rule: ProductRule): ProductDTO {
        const product = new ProductDTO();
        product.id = id;
        product.description = description;
        product.price = price;
        product.rule = rule;
        product.sellIn = sellIn;
        return product;
    }
}
export enum ProductRule {
    UP = 'UP',
    FIXED = 'FIXED',
    DOWN = 'DOWN',
    DOUBLE_DOWN = 'DOUBLE_DOWN',
    UP_SPECIAL = 'UP_SPECIAL'
}