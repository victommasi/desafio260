import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
// import AdminController from './app/controllers/AdminController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', async (req, res) => {
  res.json({ message: 'Hello World!' });
});

routes.post('/users', UserController.save);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.save);

routes.post('/files', authMiddleware, upload.single('file'), FileController.save);

export default routes;
