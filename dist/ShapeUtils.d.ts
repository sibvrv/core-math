import { Vector2 } from './Vector2';
/**
 * Polygon Area
 * @param vertices
 */
export declare function polygonArea(vertices: Vector2[]): number;
/**
 * Returns true if the sum of signed distances is greater than zero, which can be used as a quick test for convex polygon orientation
 * @param points
 */
export declare const isClockwise: (points: Vector2[]) => boolean;
/**
 * Is Point In Poly
 * ray-casting algorithm based on http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
 * @param x
 * @param y
 * @param vertices
 */
export declare function isPointInPoly(x: number, y: number, vertices: Vector2[]): boolean;
//# sourceMappingURL=ShapeUtils.d.ts.map