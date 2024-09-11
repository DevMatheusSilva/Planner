import { Router, Request, Response } from 'express';
import UserController from "../UserController";

const userController = new UserController();
const userRouter = Router();

userRouter.get('/login', (req: Request, res: Response) => userController.renderLoginPage(req, res));
userRouter.get('/register', (req: Request, res: Response) => userController.renderRegisterPage(req, res));

export default userRouter;
