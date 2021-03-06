import base, { IBaseOptions } from './base';
import * as model from '../models/index';
export default class Catalog extends base {

    constructor(data?: IBaseOptions) {
        super();
        if (data) {
            const updatedBase = new base(data);

            this.v1 = updatedBase.v1;
            this.v2 = updatedBase.v2;
        }
    }
    /**
     * Get info for the {catalogId}
     * @param catalogId
     */
    public async getInfo(catalogId: number): Promise<model.Catalog.CatalogInfo> {
        return (await this.v1.get('/catalog/' + catalogId + '/info')).data;
    }

    /**
     * count sales for the {catalogId}
     * @param catalogId
     */
    public async countSales(catalogId: number): Promise<{ sales: number }> {
        return (await this.v1.get('/catalog/' + catalogId + '/sales/count')).data;
    }

    /**
     * count all catalog items for sale
     */
    public async countAllItemsForSale(): Promise<number> {
        return (await this.v1.get('/catalog/all-items/count')).data;
    }
}