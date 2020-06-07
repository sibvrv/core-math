import {Vector2} from '../Vector2';

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
