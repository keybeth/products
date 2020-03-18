import Sale from "./sale.entity";

export default interface SaleRepositoryContract {
    insert(sale: Sale): Promise<void>;
    findAll(): Promise<Sale[]>;
}