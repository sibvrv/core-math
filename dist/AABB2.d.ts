import { Vector2 } from './Vector2';
/**
 * Axis-Aligned Bounding Box 2D
 */
export declare class AABB2 {
    lower: Vector2;
    upper: Vector2;
    /**
     * AABB2 Constructor
     * @param lower
     * @param upper
     */
    constructor(lower?: Vector2, upper?: Vector2);
    /**
     * is AABB Overlap
     * @param a1
     * @param a2
     */
    static isOverlap(a1: AABB2, a2: AABB2): boolean;
}
//# sourceMappingURL=AABB2.d.ts.map