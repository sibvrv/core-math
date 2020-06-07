import {Vector2} from '../Vector2';
import {expect} from 'chai';
import {isClockwise} from './isClockwise';

describe('Shape Utils', () => {

  const polyCW = [
    new Vector2(0, 0),
    new Vector2(1, 1),
    new Vector2(1, 0),
    new Vector2(0, 0),
  ];

  const polyCCW = [
    new Vector2(0, 0),
    new Vector2(1, 0),
    new Vector2(1, 1),
    new Vector2(0, 0),
  ];

  it('is clockwise', () => {
    const cw = isClockwise(polyCW);
    expect(cw).to.be.eq(true, 'should be clockwise');

    const ccw = isClockwise(polyCCW);
    expect(ccw).to.be.eq(false, 'should be counter-clockwise');
  });
});
