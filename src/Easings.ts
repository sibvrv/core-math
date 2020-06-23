/**
 * Linear
 * no easing, no acceleration
 * @param t
 */
export const linear = (t: number) => t;

/**
 * easeInQuad
 * Accelerating from zero velocity
 * @param t
 */
export const easeInQuad = (t: number) => t * t;

/**
 * easeOutQuad
 * Decelerating to zero velocity
 * @param t
 */
export const easeOutQuad = (t: number) => t * (2 - t);

/**
 * easeInOutQuad
 * acceleration until halfway, then deceleration
 * @param t
 */
export const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + 2 * (2 - t) * t;

/**
 * easeInCubic
 * accelerating from zero velocity
 * @param t
 */
export const easeInCubic = (t: number) => t * t * t;

/**
 * easeOutCubic
 * decelerating to zero velocity
 * @param t
 */
export const easeOutCubic = (t: number) => --t * t * t + 1;

/**
 * easeInOutCubic
 * acceleration until halfway, then deceleration
 * @param t
 */
export const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

/**
 * easeInQuart
 * accelerating from zero velocity
 * @param t
 */
export const easeInQuart = (t: number) => t * t * t * t;

/**
 * easeOutQuart
 * decelerating to zero velocity
 * @param t
 */
export const easeOutQuart = (t: number) => 1 - (--t) * t * t * t;

/**
 * easeInOutQuart
 * acceleration until halfway, then deceleration
 * @param t
 */
export const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;

/**
 * easeInQuint
 * accelerating from zero velocity
 * @param t
 */
export const easeInQuint = (t: number) => t * t * t * t * t;

/**
 * easeOutQuint
 * decelerating to zero velocity
 * @param t
 */
export const easeOutQuint = (t: number) => 1 + --t * t * t * t * t;

/**
 * easeInOutQuint
 * acceleration until halfway, then deceleration
 * @param t
 */
export const easeInOutQuint = (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
