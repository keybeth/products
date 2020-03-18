import { HttpStatusCode } from "../../common/constants";
import { ProductDTO } from "../../../domain/product/product.model";
import { ProductContract } from "../../../domain/product/product.contract";
import logger from '../../../infrastructure/config/logger';

export class ProductController {

  constructor(private productService: ProductContract) { }

  sellProduct = async (req, res) => {
    try {
      if (isNaN(req.params.id)) {
        
        throw new Error(`Parametro id = ${req.params.id}, no es numerico `);
      }
      const productId = parseInt(req.params.id);
      await this.productService.sellProduct(productId);
      res.status(HttpStatusCode.NO_CONTENT);
    } catch (error) {
      logger.error(error.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }    
  }

  getSoldProducts = async (req, res) => {
    try {
      //TODO salida
      const result = await this.productService.getSoldProducts();
      res.status(HttpStatusCode.OK).send(result);
    } catch (error) {     
      logger.error(error.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

  evaluateProducts = async (req, res) => {
    try {
      if (isNaN(req.params.days)) {
        throw new Error('Parametro days no es numerico');
      }
      const days = parseInt(req.params.days);
      const result = await this.productService.evaluateProducts(days);
      res.status(HttpStatusCode.OK).send(result);
    } catch (error) {     
      logger.error(error.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

}

