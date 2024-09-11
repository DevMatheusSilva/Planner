import express from "express";
import userRouter from "./userRouter";

const routes = (app: express.Application) => {
    app.get('/', (_, res) => {
        res.redirect("/users/login");
    });

    app.use('/users', userRouter);
}

export default routes;
