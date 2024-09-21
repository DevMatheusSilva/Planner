import Task from '../entities/Task';
import Repository from "../repositories/Repository";
import NewTaskDTO from "../controllers/dtos/NewTaskDTO";
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
        const result = await this.repository.findAll();
        return result.map(task => new CreatedTaskDTO(task));
    }
}