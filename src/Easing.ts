/**
 * No easing, no acceleration
 * @param t
 */
export const linear = (t: number) => t;

/**
 * Accelerating from zero velocity
 * @param t
 */
export const easeInQuad = (t: number) => t * t;

/**
 * Decelerating to zero velocity
 * @param t
 */
export const easeOutQuad = (t: number) => t * (2 - t);

/**
 * Acceleration until halfway, then deceleration
 * @param t
 */
export const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + 2 * (2 - t) * t;

/**
 * Accelerating from zero velocity
 * @param t
 */
export const easeInCubic = (t: number) => t * t * t;

/**
 * Decelerating to zero velocity
 * @param t
 */
export const easeOutCubic = (t: number) => --t * t * t + 1;

/**
 * Acceleration until halfway, then deceleration
 * @param t
 */
export const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

/**
 * Accelerating from zero velocity
 * @param t
 */
export const easeInQuart = (t: number) => t * t * t * t;

/**
 * Decelerating to zero velocity
 * @param t
 */
export const easeOutQuart = (t: number) => 1 - (--t) * t * t * t;

/**
 * Acceleration until halfway, then deceleration
 * @param t
 */
export const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;

/**
 * Accelerating from zero velocity
 * @param t
 */
export const easeInQuint = (t: number) => t * t * t * t * t;

/**
 * Decelerating to zero velocity
 * @param t
 */
export const easeOutQuint = (t: number) => 1 + --t * t * t * t * t;

/**
 * Acceleration until halfway, then deceleration
 * @param t
 */
export const easeInOutQuint = (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
