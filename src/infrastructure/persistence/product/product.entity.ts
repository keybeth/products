export default class Product {
    id: number;
    description: string;
    sellIn: number;
    price: number;
    rule: string;

    static fromFields(id: number, description: string, sellIn: number, price: number, rule: string): Product {
        const product = new Product();
        product.id = id;
        product.description = description;
        product.price = price;
        product.rule = rule;
        product.sellIn = sellIn;
        return product;
    }
}