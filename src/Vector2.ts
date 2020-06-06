/**
 * Vector 2D
 */
export class Vector2 {
  /**
   * Vector2 Constructor
   */
  constructor(
    public x = 0,
    public y = 0,
  ) {

  }

  /**
   * Vector2
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * Copy values from Vector2 or object
   * @param v
   */
  copy(v: Vector2 | { x: number, y: number }) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  /**
   * set Vector2 values
   * @param x
   * @param y
   */
  set(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  dot(v: Vector2) {
    return this.x * v.x + this.y * v.y;
  }

  add(v: Vector2) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v: Vector2) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  mul(v: Vector2) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  divf(v: number) {
    this.x /= v;
    this.y /= v;
    return this;
  }

  mulf(v: number) {
    this.x *= v;
    this.y *= v;
    return this;
  }

  mid(v: Vector2) {
    return new Vector2((this.x + v.x) * 0.5, (this.y + v.y) * 0.5);
  }

  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }

  abs() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    return this;
  }

  equal(v: Vector2) {
    return this.x === v.x && this.y === v.y;
  }

  crossVector() {
    const x = this.x;
    this.x = -this.y;
    this.y = x;
    return this;
  }

  cross(v: Vector2) {
    return this.x * v.y - this.y * v.x;
  }

  normalize() {
    let len = this.x * this.x + this.y * this.y;
    len = (len === 0) ? 1 : Math.sqrt(len);
    this.x /= len;
    this.y /= len;
    return this;
  }

  length() {
    const x = this.x;
    const y = this.y;
    return Math.sqrt(x * x + y * y);
  }

  lengthSq() {
    const x = this.x;
    const y = this.y;
    return x * x + y * y;
  }

  /**
   * Distance between points
   * @param v
   */
  distance(v: Vector2) {
    const x = this.x - v.x;
    const y = this.y - v.y;
    return Math.sqrt(x * x + y * y);
  }

  /**
   * Square distance between points
   * @param v
   */
  distanceSq(v: Vector2) {
    const x = this.x - v.x;
    const y = this.y - v.y;
    return x * x + y * y;
  }

  /**
   * Get Vector From Angle
   * @param a
   */
  fromAngle(a: number) {
    this.x = Math.cos(a);
    this.y = Math.sin(a);
    return this;
  }

  /**
   * Computes the angle in radians
   */
  toAngle() {
    let a = Math.atan2(this.y, this.x);
    if (a < 0) {
      a += Math.PI * 2;
    }
    return a;
  }

  /**
   * Rotate vector by angle
   * @param angle
   */
  rotate(angle: number) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    const x = this.x;
    const y = this.y;

    this.x = x * c - y * s;
    this.y = x * s + y * c;
    return this;
  }

  /**
   * Rotate vector around point by angle
   * @param center
   * @param angle
   */
  rotateAround(center: Vector2, angle: number) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    const x = this.x - center.x;
    const y = this.y - center.y;

    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
}
