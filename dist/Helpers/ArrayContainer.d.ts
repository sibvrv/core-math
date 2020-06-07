/**
 * Array Container
 */
export declare class ArrayContainer<T> {
    items: T[];
    clear(): void;
    empty(): boolean;
    push(v: T): void;
    pop(): void;
    get(idx: number): T | undefined;
    size(): number;
    reverse(): void;
    insert(index: number, vector: T): void;
    delete(index: number): void;
}
//# sourceMappingURL=ArrayContainer.d.ts.map