export default class NewTaskDTO {
    public name: string;
    public description: string;
    public dueDate: Date;

    constructor(name: string, description: string, dueDate: Date) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }

    public static fromObject(obj: any): NewTaskDTO {
        return new NewTaskDTO(obj.name, obj.description, obj.dueDate);
    }
}