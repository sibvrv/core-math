[core-math](README.md)

# core-math

## Index

### Namespaces

* [__global](modules/__global.md)

### Classes

* [AABB2](classes/aabb2.md)
* [ArrayContainer](classes/arraycontainer.md)
* [Line2](classes/line2.md)
* [OBB2](classes/obb2.md)
* [Vector2](classes/vector2.md)
* [Vector2Array](classes/vector2array.md)

### Variables

* [DEGREES_TO_RADIANS](README.md#const-degrees_to_radians)
* [LN2_INV](README.md#const-ln2_inv)
* [MATH_VERSION](README.md#const-math_version)
* [PI](README.md#const-pi)
* [PI2](README.md#const-pi2)
* [PI2_INV](README.md#const-pi2_inv)
* [PI4](README.md#const-pi4)
* [PI_HALVES](README.md#const-pi_halves)
* [PI_INV](README.md#const-pi_inv)
* [PI_SQR](README.md#const-pi_sqr)
* [RADIANS_TO_DEGREES](README.md#const-radians_to_degrees)
* [SQRT2_INV](README.md#const-sqrt2_inv)
* [SQRT3](README.md#const-sqrt3)

### Functions

* [LineLineIntersection](README.md#linelineintersection)
* [ceilPowerOfTwo](README.md#const-ceilpoweroftwo)
* [clamp](README.md#const-clamp)
* [floorPowerOfTwo](README.md#const-floorpoweroftwo)
* [isClockwise](README.md#const-isclockwise)
* [isPointInPoly](README.md#ispointinpoly)
* [isPowerOfTwo](README.md#const-ispoweroftwo)
* [lerp](README.md#const-lerp)
* [polygonArea](README.md#polygonarea)
* [polygonOffset](README.md#polygonoffset)
* [smoothStep](README.md#smoothstep)

## Variables

### `Const` DEGREES_TO_RADIANS

• **DEGREES_TO_RADIANS**: *number* = PI / 180

*Defined in [Constants.ts:7](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L7)*

___

### `Const` LN2_INV

• **LN2_INV**: *number* = 1.0 / Math.LN2

*Defined in [Constants.ts:19](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L19)*

___

### `Const` MATH_VERSION

• **MATH_VERSION**: *object* = __LIB_VERSION__

*Defined in [index.ts:12](https://github.com/sibvrv/core-math/blob/master/src/index.ts#L12)*

Core Math

#### Type declaration:

* **build**: *string*

* **date**: *string*

* **stamp**: *number*

___

### `Const` PI

• **PI**: *number* = Math.PI

*Defined in [Constants.ts:4](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L4)*

Commonly used constants

___

### `Const` PI2

• **PI2**: *number* = 2.0 * PI

*Defined in [Constants.ts:9](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L9)*

___

### `Const` PI2_INV

• **PI2_INV**: *number* = 0.5 / PI

*Defined in [Constants.ts:14](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L14)*

___

### `Const` PI4

• **PI4**: *number* = 4.0 * PI

*Defined in [Constants.ts:10](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L10)*

___

### `Const` PI_HALVES

• **PI_HALVES**: *number* = 0.5 * PI

*Defined in [Constants.ts:12](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L12)*

___

### `Const` PI_INV

• **PI_INV**: *number* = 1.0 / PI

*Defined in [Constants.ts:13](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L13)*

___

### `Const` PI_SQR

• **PI_SQR**: *number* = PI * PI

*Defined in [Constants.ts:11](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L11)*

___

### `Const` RADIANS_TO_DEGREES

• **RADIANS_TO_DEGREES**: *number* = 180.0 / PI

*Defined in [Constants.ts:6](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L6)*

___

### `Const` SQRT2_INV

• **SQRT2_INV**: *number* = 1.0 / Math.SQRT2

*Defined in [Constants.ts:17](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L17)*

___

### `Const` SQRT3

• **SQRT3**: *number* = Math.sqrt(3.0)

*Defined in [Constants.ts:16](https://github.com/sibvrv/core-math/blob/master/src/Constants.ts#L16)*

## Functions

###  LineLineIntersection

▸ **LineLineIntersection**(`x1`: number, `y1`: number, `x2`: number, `y2`: number, `x3`: number, `y3`: number, `x4`: number, `y4`: number): *false | object*

*Defined in [Intersection/LineLineIntersection.ts:15](https://github.com/sibvrv/core-math/blob/master/src/Intersection/LineLineIntersection.ts#L15)*

Line-Line intersection

**Parameters:**

Name | Type |
------ | ------ |
`x1` | number |
`y1` | number |
`x2` | number |
`y2` | number |
`x3` | number |
`y3` | number |
`x4` | number |
`y4` | number |

**Returns:** *false | object*

___

### `Const` ceilPowerOfTwo

▸ **ceilPowerOfTwo**(`value`: number): *number*

*Defined in [MathUtils.ts:11](https://github.com/sibvrv/core-math/blob/master/src/MathUtils.ts#L11)*

Ceil Power Of Two

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number |   |

**Returns:** *number*

___

### `Const` clamp

▸ **clamp**(`value`: number, `min`: number, `max`: number): *number*

*Defined in [MathUtils.ts:25](https://github.com/sibvrv/core-math/blob/master/src/MathUtils.ts#L25)*

Clamp

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | - |
`min` | number | - |
`max` | number |   |

**Returns:** *number*

___

### `Const` floorPowerOfTwo

▸ **floorPowerOfTwo**(`value`: number): *number*

*Defined in [MathUtils.ts:17](https://github.com/sibvrv/core-math/blob/master/src/MathUtils.ts#L17)*

Floor Power Of Two

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number |   |

**Returns:** *number*

___

### `Const` isClockwise

▸ **isClockwise**(`points`: [Vector2](classes/vector2.md)[]): *boolean*

*Defined in [ShapeUtils/isClockwise.ts:8](https://github.com/sibvrv/core-math/blob/master/src/ShapeUtils/isClockwise.ts#L8)*

Returns true if the sum of signed distances is greater than zero, which can be used as a quick test for convex polygon orientation

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`points` | [Vector2](classes/vector2.md)[] |   |

**Returns:** *boolean*

___

###  isPointInPoly

▸ **isPointInPoly**(`x`: number, `y`: number, `vertices`: [Vector2](classes/vector2.md)[]): *boolean*

*Defined in [ShapeUtils/isPointInPoly.ts:10](https://github.com/sibvrv/core-math/blob/master/src/ShapeUtils/isPointInPoly.ts#L10)*

Is Point In Poly
ray-casting algorithm based on http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | - |
`y` | number | - |
`vertices` | [Vector2](classes/vector2.md)[] |   |

**Returns:** *boolean*

___

### `Const` isPowerOfTwo

▸ **isPowerOfTwo**(`value`: number): *boolean*

*Defined in [MathUtils.ts:5](https://github.com/sibvrv/core-math/blob/master/src/MathUtils.ts#L5)*

Is Power Of Two

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number |   |

**Returns:** *boolean*

___

### `Const` lerp

▸ **lerp**(`x`: number, `y`: number, `t`: number): *number*

*Defined in [MathUtils.ts:33](https://github.com/sibvrv/core-math/blob/master/src/MathUtils.ts#L33)*

Lerp

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | - |
`y` | number | - |
`t` | number |   |

**Returns:** *number*

___

###  polygonArea

▸ **polygonArea**(`vertices`: [Vector2](classes/vector2.md)[]): *number*

*Defined in [ShapeUtils/polygonArea.ts:7](https://github.com/sibvrv/core-math/blob/master/src/ShapeUtils/polygonArea.ts#L7)*

Polygon Area

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vertices` | [Vector2](classes/vector2.md)[] |   |

**Returns:** *number*

___

###  polygonOffset

▸ **polygonOffset**(`vertices`: [Vector2](classes/vector2.md)[], `dist`: number): *[Vector2](classes/vector2.md)‹›[]*

*Defined in [ShapeUtils/polygonOffset.ts:10](https://github.com/sibvrv/core-math/blob/master/src/ShapeUtils/polygonOffset.ts#L10)*

Polygon Offset

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vertices` | [Vector2](classes/vector2.md)[] | - |
`dist` | number |   |

**Returns:** *[Vector2](classes/vector2.md)‹›[]*

___

###  smoothStep

▸ **smoothStep**(`x`: number, `min`: number, `max`: number): *number*

*Defined in [MathUtils.ts:41](https://github.com/sibvrv/core-math/blob/master/src/MathUtils.ts#L41)*

SmoothStep

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | - |
`min` | number | - |
`max` | number |   |

**Returns:** *number*
