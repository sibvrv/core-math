import { Vector2 } from './Vector2';
/**
 * Vector2Array
 */
export declare class Vector2Array<T = Vector2> {
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
//# sourceMappingURL=Vector2Array.d.ts.map