export default interface Repository<T> {
    items: T[];

    save(item: T): Promise<T>;
    findAll(): Promise<T[]>;
}