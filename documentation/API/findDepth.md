#findDepth

##findDepth(source)

##Summary

findDepth finds the depth of your object, but if it has a longer depth than seven levels, it will stop iterate and output the depth of 7.
In the future, we might add an exception or warning to say that it is iterating more than seven levels, but first we need to work on `isSelfAttached`,
to find out if the obj is cyclic or not.

```js
const findDepthonObj = findDepth(myObj)
```

##Params

* **source(object)** - The object you want to find the depth to

##Returns

`<number>` - a number of the depth of your object

##Example

```js
import {findDepth} from 'lillemo'

const attachObject = {
  'Trinity-is-my-name': {}
}
const exampleObject = findDepth(attachObject)

// Outputs
  1
```
[Next Chapter - limit](https://github.com/ev1stensberg/lillemo/blob/master/documentation/API/limit.md)
