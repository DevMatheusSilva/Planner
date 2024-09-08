import { Router } from 'express';

const userRouter = Router();

userRouter.get('/login', (_, res) => {
    res.render("./pages/login.ejs", {title: "Planner - Welcome !!"});
});

export default userRouter;
