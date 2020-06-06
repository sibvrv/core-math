/**
 * Is Power Of Two
 * @param value
 */
export const isPowerOfTwo = (value: number) => (value & (value - 1)) === 0 && value !== 0;

/**
 * Ceil Power Of Two
 * @param value
 */
export const ceilPowerOfTwo = (value: number) => Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));

/**
 * Floor Power Of Two
 * @param value
 */
export const floorPowerOfTwo = (value: number) => Math.pow(2, Math.floor(Math.log(value) / Math.LN2));

/**
 * Clamp
 * @param value
 * @param min
 * @param max
 */
export const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

/**
 * Lerp
 * @param x
 * @param y
 * @param t
 */
export const lerp = (x: number, y: number, t: number) => (1 - t) * x + t * y;

/**
 * SmoothStep
 * @param x
 * @param min
 * @param max
 */
export function smoothStep(x: number, min: number, max: number) {

  if (x <= min) {
    return 0;
  }
  if (x >= max) {
    return 1;
  }

  x = (x - min) / (max - min);

  return x * x * (3 - 2 * x);
}
