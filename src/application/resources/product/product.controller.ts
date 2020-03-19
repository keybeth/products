import { HttpStatusCode } from "../../common/constants";
import { ProductDTO } from "../../../domain/product/product.model";
import { ProductContract } from "../../../domain/product/product.contract";
import logger from '../../../infrastructure/config/logger';
import cron from "node-cron";

export class ProductController {

  constructor(private productService: ProductContract) {
    cron.schedule('0 0 * * *', async () => {
      logger.info(`Init actualizacion de productos`);
      await this.productService.updateProducts();
      logger.info(`End actualizacion de productos`);
    });
  }

  sellProduct = async (req, res) => {
    try {
      if (isNaN(req.params.id)) {
        throw new Error(`Parametro id = ${req.params.id}, no es numerico `);
      }
      const productId = parseInt(req.params.id);
      await this.productService.sellProduct(productId);
      res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (error) {
      logger.error(error.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }    
  }

  getSoldProducts = async (req, res) => {
    try {
      const result = await this.productService.getSoldProducts();
      res.status(HttpStatusCode.OK).send(result);
    } catch (error) {
      logger.error(error.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

  evaluateProducts = async (req, res) => {
    try {
      if (isNaN(req.params.days) || parseInt(req.params.days) < 0) {
        throw new Error(`Parametro days = ${req.params.days} no es valido`);
      }
      const days = parseInt(req.params.days);
      const result = await this.productService.evaluateProducts(days);
      res.status(HttpStatusCode.OK).send(result);
    } catch (error) {     
      logger.error(error.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

  updateProducts = async (req, res) => {
    try {
      logger.info('Init SOLO para test updateProducts');
      await this.productService.updateProducts();
      res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (error) {     
      logger.error(error.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }
}

