import { Request, Response } from "express";
import TaskService from "../services/TaskService";
import NewTask from "./dto/NewTask";
import UpdatedTask from "./dto/UpdatedTask";

export default class TaskController {
    private service: TaskService;

    constructor(service: TaskService){
        this.service = service;
    };

    public async createTask(req: Request, res: Response) {
        const { name, description, dueDate } = req.body;
        const newTask = new NewTask(name, description, dueDate);
        try {
            const result = await this.service.save(newTask);
            res.status(201).send(result);
        } catch (err: any) {
            const error = err as Error;
            res.status(400).send(error);
        }
    }

    public async getAllTasks(_: Request, res: Response) {
        try {
            const result = await this.service.findAll();
            res.status(200).send(result);
        } catch (err: any) {
            const error = err as Error;
            res.status(400).send(error);
        }
    }

    public async getTaskById(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const result = await this.service.findById(Number(id));
            res.status(200).send(result);
        } catch (err: any) {
            const error = err as Error;
            res.status(404).send({ message: error.message });
        }
    }

    public async updateTask(req: Request, res: Response) {
        const id = req.params.id;
        const newBody = new UpdatedTask(req.body);
        try {
            const result = await this.service.updateTask(Number(id), newBody);
            res.status(200).send(result);
        } catch (err: any) {
            const error = err as Error;
            res.status(404).send({ message: error.message });
        }
    }

    public async deleteTask(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await this.service.deleteTask(Number(id));
            res.status(200).send({message: "Task deleted"});
        } catch (err: any) {
            const error = err as Error;
            res.status(404).send({ message: error.message });
        }
    }
}