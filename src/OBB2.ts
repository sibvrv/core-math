import {Vector2} from './Vector2';

/**
 * Oriented Bounding Box 2D
 */
export class OBB2 {
  /**
   * OBB2 Constructor
   * @param pivot
   * @param size
   * @param rotation
   */
  constructor(
    public pivot = new Vector2(0, 0),
    public size = new Vector2(0, 0),
    public rotation = 0,
  ) {

  }

  static isOverlap(o1: OBB2, o2: OBB2) {
    // find axes
    const axes = [
      new Vector2(Math.cos(o1.rotation), Math.sin(o1.rotation)),
      new Vector2(-Math.sin(o1.rotation), Math.cos(o1.rotation)),
      new Vector2(Math.cos(o2.rotation), Math.sin(o2.rotation)),
      new Vector2(-Math.sin(o2.rotation), Math.cos(o2.rotation)),
    ];

    // vertices
    const verts1 = o1.local2World();
    const verts2 = o2.local2World();

    // project vertices to each axis
    for (let i = 0; i < axes.length; ++i) {
      // find max and min from o1
      let min1 = Number.MAX_VALUE, max1 = -Number.MAX_VALUE, ret1;
      for (let j = 0; j < verts1.length; ++j) {
        ret1 = verts1[j].dot(axes[i]);
        min1 = min1 > ret1 ? ret1 : min1;
        max1 = max1 < ret1 ? ret1 : max1;
      }

      // find max and min from o2
      let min2 = Number.MAX_VALUE, max2 = -Number.MAX_VALUE, ret2;
      for (let j = 0; j < verts2.length; ++j) {
        ret2 = verts2[j].dot(axes[i]);
        min2 = min2 > ret2 ? ret2 : min2;
        max2 = max2 < ret2 ? ret2 : max2;
      }

      // overlap check
      const r1 = max1 - min1;
      const r2 = max2 - min2;
      const r = (max1 > max2 ? max1 : max2) - (min1 < min2 ? min1 : min2);
      if (r1 + r2 <= r) {
        return false;
      }
    }

    return true;
  }

  public local2World() {
    const verts = [
      new Vector2(-this.size.x * 0.5, -this.size.y * 0.5),
      new Vector2(this.size.x * 0.5, -this.size.y * 0.5),
      new Vector2(this.size.x * 0.5, this.size.y * 0.5),
      new Vector2(-this.size.x * 0.5, this.size.y * 0.5),
    ];

    for (let i = verts.length; --i >= 0;) {
      verts[i].rotate(this.rotation).add(this.pivot);
    }
    return verts;
  }
}
