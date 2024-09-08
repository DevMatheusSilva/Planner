import { Router } from 'express';
import UserController from "../UserController";

const userRouter = Router();

userRouter.get('/login', UserController.renderLoginPage);
userRouter.get('/register', UserController.renderRegisterPage);

export default userRouter;
