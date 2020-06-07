import {Vector2} from '../Vector2';
import {polygonArea} from './polygonArea';
import {expect} from 'chai';

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

  it('polygon area', () => {
    const cw = polygonArea(polyCW);
    expect(cw).to.be.eq(0.5);

    const ccw = polygonArea(polyCCW);
    expect(ccw).to.be.eq(-0.5);
  });
});
