#createCircularEvent

##createCircularEvent(source, bool)

##Summary

createCircularEvent is not our main focus, but rather an addition to the "stack" to help you find circular objects,
if you know you have a circular object, you will get a warning if you use this function, if you set boolean to true
```js
const createObj = createCircularEvent(someObj, true)
// warns you
```

##Params

* **source(object)** - The object you want to add something to
* **bool(boolean)** - Given the object you are creating, will warn you if true, otherwise you clone the given object in first param

##Returns

`<Object>` - a new Object with the values from the first parameter
`<Warning>` A warning, saying the value is cyclic if you have specified second param to be true

##Example

```js
import {createCircularEvent} from 'lillemo'

const Norway = 'Sindre Sorhus'
const exampleObject = createCircularEvent(Norway, true)

// Outputs
 Warning: ...
```
[Next-Chapter- findDepth](https://github.com/ev1stensberg/lillemo/blob/master/documentation/API/findDepth.md)
