import Repository from "./Repository";
import Task from "../entities/Task";

export default class InMemoTaskRepository implements Repository<Task> {
    items: Task[];

    constructor() {
        this.items = [];
    }

    async save(task: Task): Promise<Task> {
        return new Promise<Task> ((resolve, _) => {
            this.items.push(task);
            resolve(task);
        });
    }

    async findAll(): Promise<Task[]> {
        return new Promise<Task[]> ((resolve, _) => {
            const tasks = this.items;
            resolve(tasks);
        });
    }
}