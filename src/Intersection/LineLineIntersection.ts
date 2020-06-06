import {Vector2} from '../Vector2';

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
export function LineLineIntersection(
  x1: number, y1: number,
  x2: number, y2: number,
  x3: number, y3: number,
  x4: number, y4: number,
) {
  const denominator = ((y4 - y3) * (x2 - x1)) - ((x4 - x3) * (y2 - y1));
  if (denominator === 0) {
    return false;
  }

  let a = y1 - y3;
  let b = x1 - x3;

  const numerator1 = ((x4 - x3) * a) - ((y4 - y3) * b);
  const numerator2 = ((x2 - x1) * a) - ((y2 - y1) * b);

  a = numerator1 / denominator;
  b = numerator2 / denominator;

  return {
    point: new Vector2(
      x1 + (a * (x2 - x1)),
      y1 + (a * (y2 - y1)),
    ),
    onLine1: a > 0 && a < 1,
    onLine2: b > 0 && b < 1,
  };
}
