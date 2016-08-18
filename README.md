<img src="https://github.com/ev1stensberg/lillemo/blob/master/logo/lillemo.png" align="left" height="180" "/>



***

* Easy property handling
* Handle circular references
* Handle immutable data with circular references

***

<br/>

##Introduction
***
Lillemo helps you manage circular references in a functional approach. It has inherited some of its core values from the library [ImmutableJS](https://github.com/facebook/immutable-js/) where you create a new object on each iteration. In Lillemo, you call a new function on each change, either if you are adding new objects, or removing them.
***
##Example 
***
As a great side-effect of plain-javascript, you can use Lillemo with any library using JavaScript. Here is an example of one of our methods, `findDepth`. If you want to see more examples, where we use our core functionalities, [check it out]()!
***
```js
import React from 'react'
import findDepth from 'lillemo'

var App = React.createClass({

  validateData: function() {
    if(findDepth(dataUpdate) > 4) { 
      console.log('Our data have not loaded yet')
      // run some action or what you need to do here
    }
    else { 
      // Wank with your wizzard wand
    }
  },
  render: function() {
   // render your UI
  }
});
```
##Documentation
 * [API]()
 * [Examples]()
 * [Roadmap]()
 * [Glossary]()
 * [Changelog]()

##Why you should use Lillemo
***
If you are managing some data structure, either if it is cyclic or not, it is nice to keep track of changes to your object, instead of mutating them on the fly. Lillemo is trying to adapt its API, so you could benefit from both having circular references, and regular object values. This libary is a good fit, if you have a data structure, of which you want to have clear indication of where you are changing an object value. 

***

Ideally, Lillemo fits for all types of data structures, but right now, our functions are very expensive, which means perf loss. We are trying to solve that, but for now, we advice you to use this library with caution. In fact, you may not have use of this libary at all, unless your mutations are unclear, hard to read and maintain.
***
##What Lillemo is
***
Lillemo is great out of the box. We do not use classes, which might be a good thing, and a bad thing. We wanted this initially to be an out-of-the-box library, of which, you can use every function without any class instance or binding of some sort of higher function.
***
##Installation 
***
 `npm install --save-dev lillemo`
***
##Contribution
***
This library is still under active development, as we are improving perf, the build itself and while we are creating the modules we indend to have in our final version.
***
##License
***
This project is under the MIT License, so feel free to play with Lillemo in whichever way you want. A feature or spread of word would be nice, though! 


