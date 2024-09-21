export default class NewTaskDTO {
    public name: string;
    public description: string;
    public dueDate: Date;

    constructor(name: string, description: string, dueDate: Date) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }
}