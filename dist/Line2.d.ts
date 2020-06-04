import { Vector2 } from './Vector2';
/**
 * Line 2D
 */
export declare class Line2 {
    start: Vector2;
    end: Vector2;
    /**
     * Line2 Constructor
     */
    constructor(start?: Vector2, end?: Vector2);
    set(start: Vector2, end: Vector2): this;
    clone(): Line2;
    copy(line: Line2): this;
    getCenter(): Vector2;
    delta(): Vector2;
    at(t: number): Vector2;
    distanceSq(): number;
    distance(): number;
    equal(line: Line2): boolean;
}
//# sourceMappingURL=Line2.d.ts.map