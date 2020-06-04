import {Vector2} from './Vector2';

/**
 * Line 2D
 */
export class Line2 {
  /**
   * Line2 Constructor
   */
  constructor(
    public start = new Vector2(),
    public end = new Vector2(),
  ) {

  }

  set(start: Vector2, end: Vector2) {
    this.start.copy(start);
    this.end.copy(end);
    return this;
  }

  clone() {
    return new Line2(this.start, this.end);
  }

  copy(line: Line2) {
    this.start.copy(line.start);
    this.end.copy(line.end);
    return this;
  }

  getCenter() {
    const {start, end} = this;
    return new Vector2(
      (start.x + end.x) * 0.5,
      (start.y + end.y) * 0.5,
    );
  }

  delta() {
    const {start, end} = this;
    return new Vector2(
      (end.x - start.x),
      (end.y - start.y),
    );
  }

  at(t: number) {
    return this.delta().mulf(t).add(this.start);
  }

  distanceSq() {
    return this.start.distanceSq(this.end);
  }

  distance() {
    return this.start.distance(this.end);
  }

  equal(line: Line2) {
    return line.start.equal(this.start) && line.end.equal(this.end);
  }
}
