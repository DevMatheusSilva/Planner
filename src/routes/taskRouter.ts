import { Router, Request, Response } from "express";
import TaskController from "../controllers/TaskController";
import TaskService from "../services/TaskService";
import InMemoTaskRepository from "../repositories/InMemoTaskRepository";

const taskRouter = Router();
const controller = new TaskController(new TaskService(new InMemoTaskRepository()));

taskRouter.post('/', (req: Request, res: Response) => controller.createTask(req, res));
taskRouter.get('/', (req: Request, res: Response) => controller.getAllTasks(req, res));

export default taskRouter;