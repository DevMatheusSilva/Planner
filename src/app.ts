import express from 'express';
import routes from './controllers/routes/routes';
import expressStaticSetUp from './controllers/middlewares/expressStatic';
import viewConfig from "./controllers/middlewares/expressViews";

const app = express();

app.use(express.json());
app.use(expressStaticSetUp);

viewConfig(app);
routes(app);

export default app;
