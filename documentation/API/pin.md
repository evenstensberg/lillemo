#pin

##pin(source, objectPath, callback)

##Summary

Given an object and its path, pin will fire the callback you supply, if it reaches that object level

```js
const limitObj = pin(myObj, myObj.some.deep.val, function() {
  console.log("hello world")
})

```

##Params

* **source(object)** - The object you want to limit
* **objectPath(object)** - the path of the object
* **callback(function)** The function to be called if it finds that object

##Returns

`<bool, callback>` - true if it finds the object, and the callback gets fired, otherwise it returns falsy

##Example

```js
import {pin} from 'lillemo'

const limitObj = pin(myObj, myObj.some.deep.val, function() {
  console.log("hello world")
})

// Outputs hello world
  
```
[Next Chapter - preserve](https://github.com/ev1stensberg/lillemo/blob/master/documentation/API/preserve.md)
