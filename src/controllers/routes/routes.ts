import express from 'express';
import userRouter from './user.router';

const routes = (app: express.Application): void => {
    app.get('/', (_, res) => res.status(200).send('Helo World!'));
    app.use(userRouter);
};

export default routes;