export default class Task {
    id: number;
    name: string;
    description: string;
    isDone: boolean;
    createdAt: Date;
    dueDate: Date;

    constructor(name: string, description: string, isDone: boolean, createdAt: Date, dueDate: Date) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.description = description;
        this.isDone = isDone;
        this.createdAt = createdAt;
        this.dueDate = dueDate;
    }
}