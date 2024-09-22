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

    async findById(id: number): Promise<Task | null> {
        return new Promise<Task | null>((resolve, _) => {
            const taskFound = this.items.find(task => task.id === id);
            if (taskFound) {
                resolve(taskFound);
            } else {
                resolve(null);
            }
        });
    }

    async update(id: number, newBody: Task): Promise<Task> {
        return new Promise<Task> ((resolve, _) => {
           const updateIndex = this.items.findIndex(task => task.id === id);
           this.items[updateIndex] = newBody;
           return resolve(this.items[updateIndex]);
        });
    }

    async delete(id: number): Promise<void> {
        return new Promise<void> ((resolve, _) => {
           const index = this.items.findIndex(task => task.id === id);
           this.items.splice(index, 1);
           resolve();
        });
    }
}