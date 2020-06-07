import {Vector2} from '../Vector2';

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
