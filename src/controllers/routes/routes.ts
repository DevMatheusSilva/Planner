import express from 'express';
import pages from './pages.routes';

const routes = (app: express.Application): void => {
    app.get('/', (_, res) => res.status(200).send('Helo World!'));
    app.use(pages);
};

export default routes;
