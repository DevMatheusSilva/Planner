import Task from '../entities/Task';
import Repository from "../repositories/Repository";
import NewTask from "../controllers/dto/NewTask";
import TaskNotFound from "./errors/TaskNotFound";
import CreatedTask from "../controllers/dto/CreatedTask";
import UpdatedTask from "../controllers/dto/UpdatedTask";

export default class TaskService {
    repository: Repository<Task>;

    constructor(repository: Repository<Task>) {
        this.repository = repository;
    }

    async save(newTask: NewTask): Promise<CreatedTask> {
        const task = new Task(newTask.name, newTask.description, false, new Date(), newTask.dueDate);
        const result = await this.repository.save(task);
        return new CreatedTask(result);
    }

    async findAll(): Promise<CreatedTask[]> {
        return await this.repository.findAll();
        // return result.map(task => new CreatedTask(task));
    }

    async findById(id: number): Promise<CreatedTask | null> {
        const result = await this.repository.findById(id);
        if (result) {
            return new CreatedTask(result);
        }
        else {
            throw new TaskNotFound(`Task with id: ${id} not found`);
        }
    }

    async updateTask(id: number, newBody: UpdatedTask): Promise<CreatedTask | null> {
        const taskFound = await this.repository.findById(id);
        if (!taskFound) {
            throw new TaskNotFound(`Task with id: ${id} not found`);
        }

        Object.assign(taskFound, newBody);

        const result = await this.repository.update(id, taskFound);
        return new CreatedTask(result);
    }
}