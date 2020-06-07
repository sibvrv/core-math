import {Vector2} from '../Vector2';

/**
 * @internal
 * @param a
 * @param b
 */
const pointsSortFn = (a: Vector2, b: Vector2) => {
  return a.x !== b.x ? a.x - b.x : a.y - b.y;
};

/**
 * @internal
 * @param a
 * @param b
 * @param c
 */
function removeMiddle(a: Vector2, b: Vector2, c: Vector2) {
  const cross = (a.x - b.x) * (c.y - b.y) - (a.y - b.y) * (c.x - b.x);
  const dot = (a.x - b.x) * (c.x - b.x) + (a.y - b.y) * (c.y - b.y);
  return cross < 0 || cross === 0 && dot <= 0;
}

/**
 * Convex Hull 2D
 * @param inPoints
 */
export function convexHull2(inPoints: Vector2[]) {
  const points = [...inPoints].sort(pointsSortFn);

  const totalPoints = points.length;
  const hull = [];

  for (let i = 0; i < 2 * totalPoints; i++) {
    const j = i < totalPoints ? i : 2 * totalPoints - 1 - i;
    while (hull.length >= 2 && removeMiddle(hull[hull.length - 2], hull[hull.length - 1], points[j])) {
      hull.pop();
    }
    hull.push(points[j]);
  }

  hull.pop();
  return hull;
}
