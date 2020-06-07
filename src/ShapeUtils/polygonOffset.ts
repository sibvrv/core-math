import {Vector2} from '../Vector2';
import {isClockwise} from '../ShapeUtils';
import {LineLineIntersection} from '..';

/**
 * Polygon Offset
 * @param vertices
 * @param dist
 */
export function polygonOffset(vertices: Vector2[], dist: number) {
  if (isClockwise(vertices)) {
    vertices.reverse();
  }

  const normals = [];
  const len = vertices.length;
  for (let i = len; --i >= 0;) {
    const p = vertices[i];
    const p1 = vertices[(i + 1) % len];

    normals[i] = p1.clone().sub(p).crossVector().normalize().mulf(dist);
  }

  const ret = [];
  for (let i = len; --i >= 0;) {
    const p = vertices[i];
    const p_next = vertices[(i + 1) % len];

    const n_prev = normals[(len + i - 1) % len];
    const n_cur = normals[i];
    const n = n_prev.clone().add(n_cur).normalize();

    const c = LineLineIntersection(
      p.x - n.x,
      p.y - n.y,

      p.x + n.x,
      p.y + n.y,

      p.x + n_cur.x,
      p.y + n_cur.y,

      p_next.x + n_cur.x,
      p_next.y + n_cur.y,
    );

    ret[i] = c ? c.point : p.clone().add(n_cur);
  }
  return ret;
}
