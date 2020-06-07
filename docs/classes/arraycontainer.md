[core-math](../README.md) › [ArrayContainer](arraycontainer.md)

# Class: ArrayContainer ‹**T**›

Array Container

## Type parameters

▪ **T**

## Hierarchy

* **ArrayContainer**

  ↳ [Vector2Array](vector2array.md)

## Index

### Properties

* [items](arraycontainer.md#items)

### Methods

* [clear](arraycontainer.md#clear)
* [delete](arraycontainer.md#delete)
* [empty](arraycontainer.md#empty)
* [get](arraycontainer.md#get)
* [insert](arraycontainer.md#insert)
* [pop](arraycontainer.md#pop)
* [push](arraycontainer.md#push)
* [reverse](arraycontainer.md#reverse)
* [size](arraycontainer.md#size)

## Properties

###  items

• **items**: *T[]* = []

*Defined in [Helpers/ArrayContainer.ts:5](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L5)*

## Methods

###  clear

▸ **clear**(): *void*

*Defined in [Helpers/ArrayContainer.ts:7](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L7)*

**Returns:** *void*

___

###  delete

▸ **delete**(`index`: number): *void*

*Defined in [Helpers/ArrayContainer.ts:39](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

___

###  empty

▸ **empty**(): *boolean*

*Defined in [Helpers/ArrayContainer.ts:11](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L11)*

**Returns:** *boolean*

___

###  get

▸ **get**(`idx`: number): *undefined | T*

*Defined in [Helpers/ArrayContainer.ts:23](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

**Returns:** *undefined | T*

___

###  insert

▸ **insert**(`index`: number, `vector`: T): *void*

*Defined in [Helpers/ArrayContainer.ts:35](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`vector` | T |

**Returns:** *void*

___

###  pop

▸ **pop**(): *void*

*Defined in [Helpers/ArrayContainer.ts:19](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L19)*

**Returns:** *void*

___

###  push

▸ **push**(`v`: T): *void*

*Defined in [Helpers/ArrayContainer.ts:15](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *void*

___

###  reverse

▸ **reverse**(): *void*

*Defined in [Helpers/ArrayContainer.ts:31](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L31)*

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Defined in [Helpers/ArrayContainer.ts:27](https://github.com/sibvrv/core-math/blob/master/src/Helpers/ArrayContainer.ts#L27)*

**Returns:** *number*
