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
    /**
     * Directed Line
     * @param point
     * @param direction
     * @return {Line2}
     */
    static directedLine(point: Vector2, direction: Vector2): Line2;
    set(start: Vector2, end: Vector2): this;
    clone(): Line2;
    copy(line: Line2): this;
    getCenter(): Vector2;
    delta(): Vector2;
    at(t: number): Vector2;
    squareLength(): number;
    length(): number;
    /**
     * Is Lines Equal
     * @param line
     */
    equal(line: Line2): boolean;
    /**
     * Reverse
     */
    reverse(): void;
    /**
     * Extrude Line
     * @param direction
     */
    extrude(direction: Vector2): Vector2[];
}
//# sourceMappingURL=Line2.d.ts.map