export default class TaskNotFound extends Error {
    constructor(message: string) {
        super(message);
    }
}