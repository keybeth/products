import SaleRepositoryContract from "./sale.repository.contract";
import Sale from "./sale.entity";
import logger from '../../../infrastructure/config/logger';

export default class SaleRepository implements SaleRepositoryContract {
    private sales: Sale[] = [];

    async insert(sale: Sale) {
        logger.debug(`Init insert`);
        sale.id = (this.sales.length === 0 ) ? 1 : this.sales.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;
        sale.date = new Date();
        this.sales.push(sale);
        logger.debug(`End insert saleId = ${sale.id}`);
    }

    async findAll(): Promise<Sale[]> {
        logger.debug(`Init findAll`);
        return this.sales;
    }
    
}