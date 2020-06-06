import { Vector2 } from '../Vector2';
/**
 * Line-Line intersection
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @param x3
 * @param y3
 * @param x4
 * @param y4
 * @return {boolean | {onLine2: false | boolean, onLine1: false | boolean, point: Vector2}}
 */
export declare function LineLineIntersection(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): false | {
    point: Vector2;
    onLine1: boolean;
    onLine2: boolean;
};
//# sourceMappingURL=LineLineIntersection.d.ts.map