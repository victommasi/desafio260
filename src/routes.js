import { Router } from 'express';
import UserController from './app/controllers/UserController';


const routes = new Router();

routes.get('/', async (req, res) => {
  res.json({ message: 'Hello World!' });
});

routes.post('/users', UserController.save);

export default routes;
