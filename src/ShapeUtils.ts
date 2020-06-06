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
