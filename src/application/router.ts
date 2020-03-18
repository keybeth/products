
import { router } from '../infrastructure/server';
import application  from '../infrastructure/config/api';
import product from './resources/product/product.routes';

const API_BASE = application.api.base + application.api.name;

router.use( API_BASE, product );

export = router;
