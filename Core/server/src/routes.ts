import express from 'express';
import {ClassController} from './entities/classes/ClassesController';
import { ConnectionsController } from './entities/connections/Connections';


const classController = new ClassController();
const connectionsController = new ConnectionsController();

const routes = express.Router();

routes.get('/classes', classController.index)
routes.get('/connections', connectionsController.index)

routes.post('/classes', classController.store)
routes.post('/connections', connectionsController.store)

export { routes };