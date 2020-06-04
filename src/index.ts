declare global {
  var __LIB_VERSION__: {
    build: string;
    date: string;
    stamp: number;
  };
}

/**
 * Core Math
 */
export const MATH_VERSION = __LIB_VERSION__;

export * from './Vector2';
export * from './Vector2Array';
