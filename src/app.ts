import express from 'express';
import routes from './routes/routes';
import expressStaticSetUp from './middlewares/expressStatic';
import viewConfig from "./middlewares/expressViews";

const app = express();

app.use(express.json());
app.use(expressStaticSetUp);

viewConfig(app);
routes(app);

export default app;
