[core-math](../README.md) › [OBB2](obb2.md)

# Class: OBB2

Oriented Bounding Box 2D

## Hierarchy

* **OBB2**

## Index

### Constructors

* [constructor](obb2.md#constructor)

### Properties

* [pivot](obb2.md#pivot)
* [rotation](obb2.md#rotation)
* [size](obb2.md#size)

### Methods

* [local2World](obb2.md#local2world)
* [isOverlap](obb2.md#static-isoverlap)

## Constructors

###  constructor

\+ **new OBB2**(`pivot`: [Vector2](vector2.md)‹›, `size`: [Vector2](vector2.md)‹›, `rotation`: number): *[OBB2](obb2.md)*

*Defined in [OBB2.ts:6](https://github.com/sibvrv/core-math/blob/master/src/OBB2.ts#L6)*

OBB2 Constructor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pivot` | [Vector2](vector2.md)‹› | new Vector2(0, 0) | - |
`size` | [Vector2](vector2.md)‹› | new Vector2(0, 0) | - |
`rotation` | number | 0 |   |

**Returns:** *[OBB2](obb2.md)*

## Properties

###  pivot

• **pivot**: *[Vector2](vector2.md)‹›*

*Defined in [OBB2.ts:14](https://github.com/sibvrv/core-math/blob/master/src/OBB2.ts#L14)*

___

###  rotation

• **rotation**: *number*

*Defined in [OBB2.ts:16](https://github.com/sibvrv/core-math/blob/master/src/OBB2.ts#L16)*

___

###  size

• **size**: *[Vector2](vector2.md)‹›*

*Defined in [OBB2.ts:15](https://github.com/sibvrv/core-math/blob/master/src/OBB2.ts#L15)*

## Methods

###  local2World

▸ **local2World**(): *[Vector2](vector2.md)‹›[]*

*Defined in [OBB2.ts:64](https://github.com/sibvrv/core-math/blob/master/src/OBB2.ts#L64)*

**Returns:** *[Vector2](vector2.md)‹›[]*

___

### `Static` isOverlap

▸ **isOverlap**(`o1`: [OBB2](obb2.md), `o2`: [OBB2](obb2.md)): *boolean*

*Defined in [OBB2.ts:21](https://github.com/sibvrv/core-math/blob/master/src/OBB2.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`o1` | [OBB2](obb2.md) |
`o2` | [OBB2](obb2.md) |

**Returns:** *boolean*
