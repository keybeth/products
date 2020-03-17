import "./config/env";
import { ServerExpress as Server } from './server';
import routes  from '../application/router';

export function Run() {
    new Server(routes, process.env.PORT);
}