import {Vector2} from '../Vector2';
import {convexHull2} from './convexHull2';
import {expect} from 'chai';
import 'chai-shallow-deep-equal';

describe('ConvexHull2', () => {
  it('2 points', () => {
    const points = [
      new Vector2(4, 4),
      new Vector2(5, 5),
    ];
    const hull = convexHull2(points);
    expect(hull.length).eq(2);
    expect(hull).to.shallowDeepEqual([
      {x: 4, y: 4},
      {x: 5, y: 5},
    ]);
  });

  it('several points at the same position', () => {
    const points = [
      new Vector2(4, 4),
      new Vector2(4, 4),
      new Vector2(4, 4),
    ];
    const hull = convexHull2(points);
    expect(hull).to.shallowDeepEqual([
      {x: 4, y: 4},
    ]);
  });

  it('3 points convex', () => {
    const points = [
      new Vector2(0, 0),
      new Vector2(0, 5),
      new Vector2(5, 0),
    ];
    const hull = convexHull2(points);
    expect(hull).to.shallowDeepEqual([
      {x: 0, y: 0},
      {x: 0, y: 5},
      {x: 5, y: 0},
    ]);
  });

  it('3 points convex #1', () => {
    const points = [
      new Vector2(0, 0),
      new Vector2(0, 1),
      new Vector2(0, 2),
      new Vector2(0, 3),
      new Vector2(0, 4),
      new Vector2(0, 5),
      new Vector2(5, 0),
    ];
    const hull = convexHull2(points);
    expect(hull).to.shallowDeepEqual([
      {x: 0, y: 0},
      {x: 0, y: 5},
      {x: 5, y: 0},
    ]);
  });

  it('result 3 points convex', () => {
    const points = [
      new Vector2(0, 0),
      new Vector2(1, 1),
      new Vector2(2, 1),
      new Vector2(0, 5),
      new Vector2(3, 1),
      new Vector2(5, 0),
    ];
    const hull = convexHull2(points);
    expect(hull).to.shallowDeepEqual([
      {x: 0, y: 0},
      {x: 0, y: 5},
      {x: 5, y: 0},
    ]);
  });
});
