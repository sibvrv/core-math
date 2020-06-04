import {Vector2} from './Vector2';

/**
 * Vector2Array
 */
export class Vector2Array<T = Vector2> {
  items: T[] = [];

  clear() {
    this.items.length = 0;
  }

  empty() {
    return this.items.length === 0;
  }

  push(v: T) {
    this.items.push(v);
  }

  pop() {
    this.items.pop();
  }

  get(idx: number) {
    return idx >= 0 && idx < this.items.length ? this.items[idx] : undefined;
  }

  size() {
    return this.items.length;
  }

  reverse() {
    this.items.reverse();
  }

  insert(index: number, vector: T) {
    this.items.splice(index, 0, vector);
  }

  delete(index: number) {
    this.items.splice(index, 1);
  }
}
