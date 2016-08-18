'use strict';

exports.__esModule = true;
exports.isSelfAttached = isSelfAttached;
/* map through node tree and find the values and
if the source has own values attached, throw
*/

function isSelfAttached(source) {

  var seenObjects = [];
  var caughtObjects = [];

  function iterate(source) {
    if (source && typeof source === 'object') {
      if (caughtObjects.indexOf(source) !== -1) {
        return true;
      }
      seenObjects.push(source);
      for (var key in source) {
        var sourceKey = source[key];

        for (var i = 0; i < seenObjects.length; i++) {
          if (seenObjects[i] === sourceKey) {
            caughtObjects.push(source);
            return true;
          }
        }
        if (source.hasOwnProperty(key) && iterate(source[key])) {
          return false;
        }
      }
    }
    return false;
  }
  return iterate(source);
}