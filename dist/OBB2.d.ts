import { Vector2 } from './Vector2';
/**
 * Oriented Bounding Box 2D
 */
export declare class OBB2 {
    pivot: Vector2;
    size: Vector2;
    rotation: number;
    /**
     * OBB2 Constructor
     * @param pivot
     * @param size
     * @param rotation
     */
    constructor(pivot?: Vector2, size?: Vector2, rotation?: number);
    static isOverlap(o1: OBB2, o2: OBB2): boolean;
    local2World(): Vector2[];
}
//# sourceMappingURL=OBB2.d.ts.map