import Task from '../entities/Task';
import Repository from "../repositories/Repository";
import NewTaskDTO from "../controllers/dtos/NewTaskDTO";
import CreatedTask from "../controllers/dtos/CreatedTask";

export default class TaskService {
    repository: Repository<Task>;

    constructor(repository: Repository<Task>) {
        this.repository = repository;
    }

    async save(newTask: NewTaskDTO): Promise<CreatedTask> {
        const task = new Task(newTask.name, newTask.description, false, new Date(), newTask.dueDate);
        const result = await this.repository.save(task);
        return new CreatedTask(result.name, result.description, result.createdAt, result.dueDate, result.isDone);
    }

    async findAll(): Promise<CreatedTask[]> {
        const result = await this.repository.findAll();
        return result.map(task => new CreatedTask(task.name, task.description, task.createdAt, task.dueDate, task.isDone));
    }
}