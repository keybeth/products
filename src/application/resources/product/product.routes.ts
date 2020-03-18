import { router } from '../../../infrastructure/server';
import { ProductController } from './product.controller';
import { ProductService } from '../../../domain/product/product.service';
import ProductRepository from '../../../infrastructure/persistence/product/product.repository';
import SaleRepository from '../../../infrastructure/persistence/sale/sale.repository';

const productController = new ProductController(new ProductService(new ProductRepository(), new SaleRepository()));

router.get('/product/:id/sell',  productController.sellProduct);
router.get('/product/sold', productController.getSoldProducts);
router.get('/product/simulation/:days', productController.evaluateProducts);
 
export = router;
