import Task from "../../entities/Task";

export default class CreatedTaskDTO {
    name: string;
    description: string;
    createdAt: Date;
    dueDate: Date;
    isDone: boolean;

    constructor(task: Task) {
        this.name = task.name;
        this.description = task.description;
        this.createdAt = task.createdAt;
        this.dueDate = task.dueDate;
        this.isDone = task.isDone;
    }
}