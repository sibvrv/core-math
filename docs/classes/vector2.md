[core-math](../README.md) › [Vector2](vector2.md)

# Class: Vector2

Vector 2D

## Hierarchy

* **Vector2**

## Index

### Constructors

* [constructor](vector2.md#constructor)

### Properties

* [x](vector2.md#x)
* [y](vector2.md#y)

### Methods

* [abs](vector2.md#abs)
* [add](vector2.md#add)
* [clone](vector2.md#clone)
* [copy](vector2.md#copy)
* [cross](vector2.md#cross)
* [crossVector](vector2.md#crossvector)
* [distance](vector2.md#distance)
* [distanceSq](vector2.md#distancesq)
* [divf](vector2.md#divf)
* [dot](vector2.md#dot)
* [equal](vector2.md#equal)
* [fromAngle](vector2.md#fromangle)
* [length](vector2.md#length)
* [lengthSq](vector2.md#lengthsq)
* [mid](vector2.md#mid)
* [mul](vector2.md#mul)
* [mulf](vector2.md#mulf)
* [normalize](vector2.md#normalize)
* [rotate](vector2.md#rotate)
* [rotateAround](vector2.md#rotatearound)
* [round](vector2.md#round)
* [set](vector2.md#set)
* [sub](vector2.md#sub)
* [toAngle](vector2.md#toangle)

## Constructors

###  constructor

\+ **new Vector2**(`x`: number, `y`: number): *[Vector2](vector2.md)*

*Defined in [Vector2.ts:4](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L4)*

Vector2 Constructor

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`x` | number | 0 |
`y` | number | 0 |

**Returns:** *[Vector2](vector2.md)*

## Properties

###  x

• **x**: *number*

*Defined in [Vector2.ts:9](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L9)*

___

###  y

• **y**: *number*

*Defined in [Vector2.ts:10](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L10)*

## Methods

###  abs

▸ **abs**(): *this*

*Defined in [Vector2.ts:87](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L87)*

**Returns:** *this*

___

###  add

▸ **add**(`v`: [Vector2](vector2.md)): *this*

*Defined in [Vector2.ts:47](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *this*

___

###  clone

▸ **clone**(): *[Vector2](vector2.md)‹›*

*Defined in [Vector2.ts:18](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L18)*

Vector2

**Returns:** *[Vector2](vector2.md)‹›*

___

###  copy

▸ **copy**(`v`: [Vector2](vector2.md) | object): *this*

*Defined in [Vector2.ts:26](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L26)*

Copy values from Vector2 or object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`v` | [Vector2](vector2.md) &#124; object |   |

**Returns:** *this*

___

###  cross

▸ **cross**(`v`: [Vector2](vector2.md)): *number*

*Defined in [Vector2.ts:104](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *number*

___

###  crossVector

▸ **crossVector**(): *this*

*Defined in [Vector2.ts:97](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L97)*

**Returns:** *this*

___

###  distance

▸ **distance**(`v`: [Vector2](vector2.md)): *number*

*Defined in [Vector2.ts:132](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L132)*

Distance between points

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`v` | [Vector2](vector2.md) |   |

**Returns:** *number*

___

###  distanceSq

▸ **distanceSq**(`v`: [Vector2](vector2.md)): *number*

*Defined in [Vector2.ts:142](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L142)*

Square distance between points

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`v` | [Vector2](vector2.md) |   |

**Returns:** *number*

___

###  divf

▸ **divf**(`v`: number): *this*

*Defined in [Vector2.ts:65](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *this*

___

###  dot

▸ **dot**(`v`: [Vector2](vector2.md)): *number*

*Defined in [Vector2.ts:43](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *number*

___

###  equal

▸ **equal**(`v`: [Vector2](vector2.md)): *boolean*

*Defined in [Vector2.ts:93](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *boolean*

___

###  fromAngle

▸ **fromAngle**(`a`: number): *this*

*Defined in [Vector2.ts:152](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L152)*

Get Vector From Angle

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | number |   |

**Returns:** *this*

___

###  length

▸ **length**(): *number*

*Defined in [Vector2.ts:116](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L116)*

**Returns:** *number*

___

###  lengthSq

▸ **lengthSq**(): *number*

*Defined in [Vector2.ts:122](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L122)*

**Returns:** *number*

___

###  mid

▸ **mid**(`v`: [Vector2](vector2.md)): *[Vector2](vector2.md)‹›*

*Defined in [Vector2.ts:77](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *[Vector2](vector2.md)‹›*

___

###  mul

▸ **mul**(`v`: [Vector2](vector2.md)): *this*

*Defined in [Vector2.ts:59](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *this*

___

###  mulf

▸ **mulf**(`v`: number): *this*

*Defined in [Vector2.ts:71](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *this*

___

###  normalize

▸ **normalize**(): *this*

*Defined in [Vector2.ts:108](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L108)*

**Returns:** *this*

___

###  rotate

▸ **rotate**(`angle`: number): *this*

*Defined in [Vector2.ts:173](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L173)*

Rotate vector by angle

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number |   |

**Returns:** *this*

___

###  rotateAround

▸ **rotateAround**(`center`: [Vector2](vector2.md), `angle`: number): *this*

*Defined in [Vector2.ts:190](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L190)*

Rotate vector around point by angle

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | [Vector2](vector2.md) | - |
`angle` | number |   |

**Returns:** *this*

___

###  round

▸ **round**(): *this*

*Defined in [Vector2.ts:81](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L81)*

**Returns:** *this*

___

###  set

▸ **set**(`x`: number, `y`: number): *this*

*Defined in [Vector2.ts:37](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L37)*

set Vector2 values

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | - |
`y` | number |   |

**Returns:** *this*

___

###  sub

▸ **sub**(`v`: [Vector2](vector2.md)): *this*

*Defined in [Vector2.ts:53](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *this*

___

###  toAngle

▸ **toAngle**(): *number*

*Defined in [Vector2.ts:161](https://github.com/sibvrv/core-math/blob/master/src/Vector2.ts#L161)*

Computes the angle in radians

**Returns:** *number*
