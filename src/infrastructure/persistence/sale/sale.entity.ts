import Product from "../product/product.entity";

export default class Sale {
    id: number;
    date: Date;
    product: Product;

    static fromFields(id: number, date: Date, product: Product): Sale {
        const sale = new Sale();
        sale.id = id;
        sale.date = date;
        sale.product = product;
        return sale;
    }
    static fromProduct(product: Product): Sale {
        const sale = new Sale();
        sale.product = product;
        return sale;
    }
}