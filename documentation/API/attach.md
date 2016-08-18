#Attach

##attach(source, targetDepth, key, value)

##Summary

attach let you add key/value pairs at a given depth of your object. If you don't know the depth, you can simply do like this:
```js
const findDepthonObj = findDepth(myObj.viet.nam)
const newValue = attach(myObj, findDepthonObj, 'Forest', 'Gump')
```

##Params

* **source(object)** - The object you want to add something to
* **targetDepth(number)** - the place/depth of the object you're adding the touple to
* **key(any)** - The key you want it to have
* **value(any)** - Given value you are adding

##Returns

`<Object>` - a new Object with the values added on itself

##Example

```js
import {attach} from 'lillemo'

const Sweden = 'Sebastian Markbaage'
const attachObject = {
  'Same-depth': {}
}
const exampleObject = attach(attachObj, 1, 'Swedish-Object', Sweden)

// Outputs
  {
  'Same-depth': {},
   'Swedish-Object': 'Sebastian Markbaage' // Sweden obj
  }
```
[Next Chapter - CyclicEvent](https://github.com/ev1stensberg/lillemo/blob/master/documentation/API/cyclicEvent.md)
