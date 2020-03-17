
import { router } from '../infrastructure/server';
import application  from '../infrastructure/config/api';

const API_BASE = application.api.base + application.api.name;

export = router;
