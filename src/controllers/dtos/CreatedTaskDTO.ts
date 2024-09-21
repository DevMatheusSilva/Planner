import Task from "../../entities/Task";

export default class CreatedTaskDTO {
    name: string;
    description: string;
    createdAt: Date;
    dueDate: Date;
    isDone: boolean;

    constructor(name: string, description: string, createdAt: Date, dueDate: Date, isDone: boolean) {
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }

    static fromTask(task: Task): CreatedTaskDTO {
        return new CreatedTaskDTO(task.name, task.description, task.createdAt, task.dueDate, task.isDone);
    }
}