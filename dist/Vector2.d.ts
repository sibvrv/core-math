/**
 * Vector 2D
 */
export declare class Vector2 {
    x: number;
    y: number;
    /**
     * Vector2 Constructor
     */
    constructor(x?: number, y?: number);
    /**
     * Vector2
     */
    clone(): Vector2;
    /**
     * Copy values from Vector2 or object
     * @param v
     */
    copy(v: Vector2 | {
        x: number;
        y: number;
    }): this;
    /**
     * set Vector2 values
     * @param x
     * @param y
     */
    set(x: number, y: number): this;
    add(v: Vector2): this;
    sub(v: Vector2): this;
    mul(v: Vector2): this;
    divf(v: number): this;
    mulf(v: number): this;
    mid(v: Vector2): Vector2;
    round(): this;
    abs(): this;
    equal(v: Vector2): boolean;
    crossVector(): this;
    cross(v: Vector2): number;
    normalize(): this;
    length(): number;
    lengthSq(): number;
    /**
     * Distance between points
     * @param v
     */
    distance(v: Vector2): number;
    /**
     * Square distance between points
     * @param v
     */
    distanceSq(v: Vector2): number;
    /**
     * Get Vector From Angle
     * @param a
     */
    fromAngle(a: number): this;
    /**
     * Computes the angle in radians
     */
    toAngle(): number;
    /**
     * Rotate vector by angle
     * @param angle
     */
    rotate(angle: number): this;
    /**
     * Rotate vector around point by angle
     * @param center
     * @param angle
     */
    rotateAround(center: Vector2, angle: number): this;
}
//# sourceMappingURL=Vector2.d.ts.map