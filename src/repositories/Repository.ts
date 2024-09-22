export default interface Repository<T> {
    items: T[];

    save(item: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
}