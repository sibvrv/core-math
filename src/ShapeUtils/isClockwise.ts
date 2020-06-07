import {Vector2} from '../Vector2';
import {polygonArea} from './polygonArea';

/**
 * Returns true if the sum of signed distances is greater than zero, which can be used as a quick test for convex polygon orientation
 * @param points
 */
export const isClockwise = (points: Vector2[]) => polygonArea(points) > 0;
