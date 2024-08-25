import express from 'express';
import routes from './controllers/routes/routes';
import { setupHandlebars } from './controllers/middlewares/handlebars';

const app = express();
setupHandlebars(app);

app.use(express.json());
routes(app);

export default app;
