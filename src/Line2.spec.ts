import {Line2} from './Line2';
import {Vector2} from './Vector2';
import {expect} from 'chai';
import 'chai-shallow-deep-equal';

describe('Line2', () => {
  it('reverse', () => {
    const A = new Vector2(4, 3);
    const B = new Vector2(5, 9);
    const line = new Line2(A, B);

    expect(line.start).to.eq(A);
    expect(line.end).to.eq(B);

    line.reverse();

    expect(line.start).to.eq(B);
    expect(line.end).to.eq(A);
  });

  it('extrude Y', () => {
    const line = new Line2(new Vector2(5, 5), new Vector2(10, 5));
    const shape = line.extrude(new Vector2(0, 5));
    expect(shape).to.shallowDeepEqual([
      {x: 5, y: 5},
      {x: 5 + 0, y: 5 + 5},
      {x: 10 + 0, y: 5 + 5},
      {x: 10, y: 5},
    ]);
  });

  it('extrude X', () => {
    const line = new Line2(new Vector2(5, 5), new Vector2(123, 423));
    const shape = line.extrude(new Vector2(5, 0));
    expect(shape).to.shallowDeepEqual([
      {
        x: 5,
        y: 5,
      },
      {
        x: 5 + 5,
        y: 5 + 0,
      },
      {
        x: 123 + 5,
        y: 423 + 0,
      },
      {
        x: 123,
        y: 423,
      },
    ]);
  });

  it('extrude XY', () => {
    const line = new Line2(new Vector2(5, 5), new Vector2(10, 5));
    const shape = line.extrude(new Vector2(5, 5));
    expect(shape).to.shallowDeepEqual([
      {x: 5, y: 5},
      {x: 5 + 5, y: 5 + 5},
      {x: 10 + 5, y: 5 + 5},
      {x: 10, y: 5},
    ]);
  });
});
