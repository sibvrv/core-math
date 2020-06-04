[core-math](../README.md) › [Line2](line2.md)

# Class: Line2

Line 2D

## Hierarchy

* **Line2**

## Index

### Constructors

* [constructor](line2.md#constructor)

### Properties

* [end](line2.md#end)
* [start](line2.md#start)

### Methods

* [at](line2.md#at)
* [clone](line2.md#clone)
* [copy](line2.md#copy)
* [delta](line2.md#delta)
* [distance](line2.md#distance)
* [distanceSq](line2.md#distancesq)
* [equal](line2.md#equal)
* [getCenter](line2.md#getcenter)
* [set](line2.md#set)

## Constructors

###  constructor

\+ **new Line2**(`start`: [Vector2](vector2.md)‹›, `end`: [Vector2](vector2.md)‹›): *[Line2](line2.md)*

*Defined in [Line2.ts:6](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L6)*

Line2 Constructor

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`start` | [Vector2](vector2.md)‹› | new Vector2() |
`end` | [Vector2](vector2.md)‹› | new Vector2() |

**Returns:** *[Line2](line2.md)*

## Properties

###  end

• **end**: *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:12](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L12)*

___

###  start

• **start**: *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:11](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L11)*

## Methods

###  at

▸ **at**(`t`: number): *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:49](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Vector2](vector2.md)‹›*

___

###  clone

▸ **clone**(): *[Line2](line2.md)‹›*

*Defined in [Line2.ts:23](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L23)*

**Returns:** *[Line2](line2.md)‹›*

___

###  copy

▸ **copy**(`line`: [Line2](line2.md)): *this*

*Defined in [Line2.ts:27](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line2](line2.md) |

**Returns:** *this*

___

###  delta

▸ **delta**(): *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:41](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L41)*

**Returns:** *[Vector2](vector2.md)‹›*

___

###  distance

▸ **distance**(): *number*

*Defined in [Line2.ts:57](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L57)*

**Returns:** *number*

___

###  distanceSq

▸ **distanceSq**(): *number*

*Defined in [Line2.ts:53](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L53)*

**Returns:** *number*

___

###  equal

▸ **equal**(`line`: [Line2](line2.md)): *boolean*

*Defined in [Line2.ts:61](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line2](line2.md) |

**Returns:** *boolean*

___

###  getCenter

▸ **getCenter**(): *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:33](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L33)*

**Returns:** *[Vector2](vector2.md)‹›*

___

###  set

▸ **set**(`start`: [Vector2](vector2.md), `end`: [Vector2](vector2.md)): *this*

*Defined in [Line2.ts:17](https://github.com/sibvrv/core-math/blob/498c86d/src/Line2.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | [Vector2](vector2.md) |
`end` | [Vector2](vector2.md) |

**Returns:** *this*
