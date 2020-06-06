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

export * from './Constants';
export * from './MathUtils';
export * from './Vector2';
export * from './Vector2Array';
export * from './Line2';
export * from './ShapeUtils';

export * from './Intersection/LineLineIntersection';
