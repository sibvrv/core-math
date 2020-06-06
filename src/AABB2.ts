import {Vector2} from './Vector2';

/**
 * Axis-Aligned Bounding Box 2D
 */
export class AABB2 {
  /**
   * AABB2 Constructor
   * @param lower
   * @param upper
   */
  constructor(
    public lower = new Vector2(0, 0),
    public upper = new Vector2(0, 0),
  ) {

  }

  /**
   * is AABB Overlap
   * @param a1
   * @param a2
   */
  static isOverlap(a1: AABB2, a2: AABB2) {
    const v1 = a1.lower.clone().sub(a2.upper);
    if (v1.x > 0 || v1.y > 0) {
      return false;
    }

    const v2 = a2.lower.clone().sub(a1.upper);
    if (v2.x > 0 || v2.y > 0) {
      return false;
    }
    return true;
  }
}
