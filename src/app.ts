import express from 'express';
import routes from './controllers/routes/routes';
import expressStaticSetUp from './controllers/middlewares/expressStatic';

const app = express();

app.use(express.json());
app.use(expressStaticSetUp);

routes(app);

export default app;
