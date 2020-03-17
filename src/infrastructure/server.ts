import "reflect-metadata";
import express  from 'express';
import http  from "http";
import helmet  from 'helmet';
import bodyParser from 'body-parser';
import logger from './config/logger';

const app = express();
const Router = express.Router();

export class ServerExpress {

    constructor (routes: any, port: string) {

        app.use( helmet() );
        app.use( bodyParser.json() );

        app.use( (req, res, next) => {
            logger.info(`${req.method}:${req.path}`);
            next();
        });  

        app.use(routes);

        http.createServer(app).listen(port);
        logger.info(`Listening on port ${port}`);

    }
}

export const router = Router;

