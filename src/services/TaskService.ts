import Task from '../entities/Task';
import Repository from "../repositories/Repository";
import NewTaskDTO from "../controllers/dtos/NewTaskDTO";
import TaskNotFound from "./errors/TaskNotFound";
import CreatedTaskDTO from "../controllers/dtos/CreatedTaskDTO";

export default class TaskService {
    repository: Repository<Task>;

    constructor(repository: Repository<Task>) {
        this.repository = repository;
    }

    async save(newTask: NewTaskDTO): Promise<CreatedTaskDTO> {
        const task = new Task(newTask.name, newTask.description, false, new Date(), newTask.dueDate);
        const result = await this.repository.save(task);
        return new CreatedTaskDTO(result);
    }

    async findAll(): Promise<CreatedTaskDTO[]> {
        return await this.repository.findAll();
        // return result.map(task => new CreatedTaskDTO(task));
    }

    async findById(id: number): Promise<CreatedTaskDTO | null> {
        const result = await this.repository.findById(id);
        if (result) {
            return new CreatedTaskDTO(result);
        }
        else {
            throw new TaskNotFound(`Task with id: ${id} not found`);
        }
    }

    async updateTask(id: number, newBody: NewTaskDTO): Promise<CreatedTaskDTO | null> {
        const taskFound = await this.repository.findById(id);
        if (!taskFound) {
            throw new TaskNotFound(`Task with id: ${id} not found`);
        }

        taskFound.name = newBody.name;
        taskFound.description = newBody.description;
        taskFound.dueDate = newBody.dueDate;

        const result = await this.repository.update(id, taskFound);

        return new CreatedTaskDTO(result);
    }
}