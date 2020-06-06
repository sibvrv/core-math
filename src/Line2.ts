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

  /**
   * Directed Line
   * @param point
   * @param direction
   * @return {Line2}
   */
  static directedLine(point: Vector2, direction: Vector2) {
    return new Line2(point, point.clone().add(direction));
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

  squareLength() {
    return this.start.distanceSq(this.end);
  }

  length() {
    return this.start.distance(this.end);
  }

  /**
   * Is Lines Equal
   * @param line
   */
  equal(line: Line2) {
    return line.start.equal(this.start) && line.end.equal(this.end);
  }

  /**
   * Reverse
   */
  reverse() {
    [this.start, this.end] = [this.end, this.start];
  }

  /**
   * Extrude Line
   * @param direction
   */
  extrude(direction: Vector2) {
    const {start, end} = this;
    return [
      start.clone(),
      start.clone().add(direction),
      end.clone().add(direction),
      end.clone(),
    ];
  }
}
