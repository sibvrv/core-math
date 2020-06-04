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

*Defined in [Vector2.ts:4](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L4)*

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

*Defined in [Vector2.ts:9](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L9)*

___

###  y

• **y**: *number*

*Defined in [Vector2.ts:10](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L10)*

## Methods

###  abs

▸ **abs**(): *this*

*Defined in [Vector2.ts:83](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L83)*

**Returns:** *this*

___

###  add

▸ **add**(`v`: [Vector2](vector2.md)): *this*

*Defined in [Vector2.ts:43](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *this*

___

###  clone

▸ **clone**(): *[Vector2](vector2.md)‹›*

*Defined in [Vector2.ts:18](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L18)*

Vector2

**Returns:** *[Vector2](vector2.md)‹›*

___

###  copy

▸ **copy**(`v`: [Vector2](vector2.md) | object): *this*

*Defined in [Vector2.ts:26](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L26)*

Copy values from Vector2 or object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`v` | [Vector2](vector2.md) &#124; object |   |

**Returns:** *this*

___

###  cross

▸ **cross**(`v`: [Vector2](vector2.md)): *number*

*Defined in [Vector2.ts:100](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *number*

___

###  crossVector

▸ **crossVector**(): *this*

*Defined in [Vector2.ts:93](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L93)*

**Returns:** *this*

___

###  distance

▸ **distance**(`v`: [Vector2](vector2.md)): *number*

*Defined in [Vector2.ts:128](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L128)*

Distance between points

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`v` | [Vector2](vector2.md) |   |

**Returns:** *number*

___

###  distanceSq

▸ **distanceSq**(`v`: [Vector2](vector2.md)): *number*

*Defined in [Vector2.ts:138](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L138)*

Square distance between points

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`v` | [Vector2](vector2.md) |   |

**Returns:** *number*

___

###  divf

▸ **divf**(`v`: number): *this*

*Defined in [Vector2.ts:61](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *this*

___

###  equal

▸ **equal**(`v`: [Vector2](vector2.md)): *boolean*

*Defined in [Vector2.ts:89](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *boolean*

___

###  fromAngle

▸ **fromAngle**(`a`: number): *this*

*Defined in [Vector2.ts:148](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L148)*

Get Vector From Angle

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | number |   |

**Returns:** *this*

___

###  length

▸ **length**(): *number*

*Defined in [Vector2.ts:112](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L112)*

**Returns:** *number*

___

###  lengthSq

▸ **lengthSq**(): *number*

*Defined in [Vector2.ts:118](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L118)*

**Returns:** *number*

___

###  mid

▸ **mid**(`v`: [Vector2](vector2.md)): *[Vector2](vector2.md)‹›*

*Defined in [Vector2.ts:73](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *[Vector2](vector2.md)‹›*

___

###  mul

▸ **mul**(`v`: [Vector2](vector2.md)): *this*

*Defined in [Vector2.ts:55](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *this*

___

###  mulf

▸ **mulf**(`v`: number): *this*

*Defined in [Vector2.ts:67](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *this*

___

###  normalize

▸ **normalize**(): *this*

*Defined in [Vector2.ts:104](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L104)*

**Returns:** *this*

___

###  rotate

▸ **rotate**(`angle`: number): *this*

*Defined in [Vector2.ts:169](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L169)*

Rotate vector by angle

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number |   |

**Returns:** *this*

___

###  rotateAround

▸ **rotateAround**(`center`: [Vector2](vector2.md), `angle`: number): *this*

*Defined in [Vector2.ts:186](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L186)*

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

*Defined in [Vector2.ts:77](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L77)*

**Returns:** *this*

___

###  set

▸ **set**(`x`: number, `y`: number): *this*

*Defined in [Vector2.ts:37](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L37)*

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

*Defined in [Vector2.ts:49](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Vector2](vector2.md) |

**Returns:** *this*

___

###  toAngle

▸ **toAngle**(): *number*

*Defined in [Vector2.ts:157](https://github.com/sibvrv/core-math/blob/02bc25c/src/Vector2.ts#L157)*

Computes the angle in radians

**Returns:** *number*
