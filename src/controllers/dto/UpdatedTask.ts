export default class UpdatedTask {
    name?: string;
    description?: string;
    dueDate?: Date;
    isDone?: boolean;

    constructor(data: Partial<UpdatedTask>) {
        Object.assign(this, data);
    }
}