#unattach

##unattach(source, objectPath)

##Summary

Given an object and its path, unattach will delete an key/val pair from the object

```js
const limitObj = unattach(myObj, myObj.some.deep.val)

```

##Params

* **source(object)** - The object you want to limit
* **objectPath(object)** - the path of the object

##Returns

`<object>` - the new object with deleted key/values

##Example

```js
import {unattach} from 'lillemo'

const limitObj = pin(myObj, myObj.some.deep.val)

// Outputs
{
 myObj: {
   some: {
     deep: {}
     }
 }
}
  
```
