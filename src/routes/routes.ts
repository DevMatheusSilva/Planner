import express from "express";
import userRouter from "./userRouter";
import taskRouter from "./taskRouter";

const routes = (app: express.Application) => {
    app.get('/', (_, res) => {
        res.redirect('/tasks');
    });

    app.use('/users', userRouter);
    app.use('/tasks', taskRouter);
}

export default routes;
