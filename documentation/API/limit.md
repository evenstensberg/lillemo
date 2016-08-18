#limit

##limit(source, Objectpath, level)

##Summary

limit, as you would guess, limits the depth of your object or circular reference. If you call limit and later change the value of the object path, you will get an error,
but you are not shielded from changing the values below the actual path. Therefore you can add another argument in the param, which will create an unique and random id, if the depth exceeds the given level.

```js
const limitObj = limit(myObj, myObj.some.deep.val, 5)
// if you go deeper than the current level of the iteration, you will get an uniqueid
```

##Params

* **source(object)** - The object you want to limit
* **objectPath(object)** - the path of the object
* **level(number)** optional argument, if you want to avoid something below the parent(objectPath), instead of the parent to be updated

##Returns

`<object>` - a new, limited object

##Example

```js
import {limit} from 'lillemo'

var val = 'Trinity'
var ue = 'is My Name'

var regularObject = {
 val,
 ue
}
var limitObj = limit(regularObject, 'val', 2)

// Outputs the same but if you modify it you will get an error
  
```
[Next Chapter - pin](https://github.com/ev1stensberg/lillemo/blob/master/documentation/API/pin.md)
