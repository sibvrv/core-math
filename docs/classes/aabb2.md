[core-math](../README.md) › [AABB2](aabb2.md)

# Class: AABB2

Axis-Aligned Bounding Box 2D

## Hierarchy

* **AABB2**

## Index

### Constructors

* [constructor](aabb2.md#constructor)

### Properties

* [lower](aabb2.md#lower)
* [upper](aabb2.md#upper)

### Methods

* [isOverlap](aabb2.md#static-isoverlap)

## Constructors

###  constructor

\+ **new AABB2**(`lower`: [Vector2](vector2.md)‹›, `upper`: [Vector2](vector2.md)‹›): *[AABB2](aabb2.md)*

*Defined in [AABB2.ts:6](https://github.com/sibvrv/core-math/blob/master/src/AABB2.ts#L6)*

AABB2 Constructor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`lower` | [Vector2](vector2.md)‹› | new Vector2(0, 0) | - |
`upper` | [Vector2](vector2.md)‹› | new Vector2(0, 0) |   |

**Returns:** *[AABB2](aabb2.md)*

## Properties

###  lower

• **lower**: *[Vector2](vector2.md)‹›*

*Defined in [AABB2.ts:13](https://github.com/sibvrv/core-math/blob/master/src/AABB2.ts#L13)*

___

###  upper

• **upper**: *[Vector2](vector2.md)‹›*

*Defined in [AABB2.ts:14](https://github.com/sibvrv/core-math/blob/master/src/AABB2.ts#L14)*

## Methods

### `Static` isOverlap

▸ **isOverlap**(`a1`: [AABB2](aabb2.md), `a2`: [AABB2](aabb2.md)): *boolean*

*Defined in [AABB2.ts:24](https://github.com/sibvrv/core-math/blob/master/src/AABB2.ts#L24)*

is AABB Overlap

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a1` | [AABB2](aabb2.md) | - |
`a2` | [AABB2](aabb2.md) |   |

**Returns:** *boolean*
