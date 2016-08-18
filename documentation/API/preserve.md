#preserve

##preserve(source, objectPath)

##Summary

Makes the objectPath immutable in one way. It will throw an error if you modify it

```js
const limitObj = preserve(myObj, myObj.some.deep.val)
```

##Params

* **source(object)** - The object you want to limit
* **objectPath(object)** - the path of the object

##Returns

`<object>` - returns the object you are making rock-solid

##Example

```js
import {preserve} from 'lillemo'

const limitObj = preserve(myObj, myObj.some.deep.val)
  
```
[Next Chapter - unattach](https://github.com/ev1stensberg/lillemo/blob/master/documentation/API/unattach.md)
