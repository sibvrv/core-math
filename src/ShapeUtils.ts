import {Vector2} from './Vector2';

/**
 * Polygon Area
 * @param vertices
 */
export function polygonArea(vertices: Vector2[]) {
  let area = 0;
  const len = vertices.length;
  for (let j, i = 0; i < len; i++) {
    j = (i + 1) % len;
    area += vertices[j].x * vertices[i].y;
    area -= vertices[i].x * vertices[j].y;
  }
  return area / 2;
}

/**
 * Returns true if the sum of signed distances is greater than zero, which can be used as a quick test for convex polygon orientation
 * @param points
 */
export const isClockwise = (points: Vector2[]) => polygonArea(points) > 0;

/**
 * Is Point In Poly
 * ray-casting algorithm based on http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
 * @param x
 * @param y
 * @param vertices
 */
export function isPointInPoly(x: number, y: number, vertices: Vector2[]) {
  let inside = false;
  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    const xi = vertices[i].x;
    const yi = vertices[i].y;

    const xj = vertices[j].x;
    const yj = vertices[j].y;

    const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) {
      inside = !inside;
    }
  }
  return inside;
}
