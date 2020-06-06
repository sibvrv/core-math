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
* [equal](line2.md#equal)
* [extrude](line2.md#extrude)
* [getCenter](line2.md#getcenter)
* [length](line2.md#length)
* [reverse](line2.md#reverse)
* [set](line2.md#set)
* [squareLength](line2.md#squarelength)
* [directedLine](line2.md#static-directedline)

## Constructors

###  constructor

\+ **new Line2**(`start`: [Vector2](vector2.md)‹›, `end`: [Vector2](vector2.md)‹›): *[Line2](line2.md)*

*Defined in [Line2.ts:6](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L6)*

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

*Defined in [Line2.ts:12](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L12)*

___

###  start

• **start**: *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:11](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L11)*

## Methods

###  at

▸ **at**(`t`: number): *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:59](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Vector2](vector2.md)‹›*

___

###  clone

▸ **clone**(): *[Line2](line2.md)‹›*

*Defined in [Line2.ts:33](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L33)*

**Returns:** *[Line2](line2.md)‹›*

___

###  copy

▸ **copy**(`line`: [Line2](line2.md)): *this*

*Defined in [Line2.ts:37](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line2](line2.md) |

**Returns:** *this*

___

###  delta

▸ **delta**(): *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:51](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L51)*

**Returns:** *[Vector2](vector2.md)‹›*

___

###  equal

▸ **equal**(`line`: [Line2](line2.md)): *boolean*

*Defined in [Line2.ts:75](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L75)*

Is Lines Equal

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`line` | [Line2](line2.md) |   |

**Returns:** *boolean*

___

###  extrude

▸ **extrude**(`direction`: [Vector2](vector2.md)): *[Vector2](vector2.md)‹›[]*

*Defined in [Line2.ts:90](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L90)*

Extrude Line

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`direction` | [Vector2](vector2.md) |   |

**Returns:** *[Vector2](vector2.md)‹›[]*

___

###  getCenter

▸ **getCenter**(): *[Vector2](vector2.md)‹›*

*Defined in [Line2.ts:43](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L43)*

**Returns:** *[Vector2](vector2.md)‹›*

___

###  length

▸ **length**(): *number*

*Defined in [Line2.ts:67](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L67)*

**Returns:** *number*

___

###  reverse

▸ **reverse**(): *void*

*Defined in [Line2.ts:82](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L82)*

Reverse

**Returns:** *void*

___

###  set

▸ **set**(`start`: [Vector2](vector2.md), `end`: [Vector2](vector2.md)): *this*

*Defined in [Line2.ts:27](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | [Vector2](vector2.md) |
`end` | [Vector2](vector2.md) |

**Returns:** *this*

___

###  squareLength

▸ **squareLength**(): *number*

*Defined in [Line2.ts:63](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L63)*

**Returns:** *number*

___

### `Static` directedLine

▸ **directedLine**(`point`: [Vector2](vector2.md), `direction`: [Vector2](vector2.md)): *[Line2](line2.md)‹›*

*Defined in [Line2.ts:23](https://github.com/sibvrv/core-math/blob/79658de/src/Line2.ts#L23)*

Directed Line

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Vector2](vector2.md) |
`direction` | [Vector2](vector2.md) |

**Returns:** *[Line2](line2.md)‹›*
