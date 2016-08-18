// Add an cyclic event to an existing one
import { errorMessage } from './utils/errorMessage';
import invariant from 'invariant';
import shortid from 'shortid';

module.exports = function (source, targetDepth, keyVal, valueVal) {

  if (typeof source !== 'object') {
    source ? errorMessage(source, null) : errorMessage(null, source);
  }
  if (typeof targetDepth !== 'number') {
    errorMessage(null, targetDepth + ' should be an object');
  }
  if (!keyVal) {
    invariant(keyVal, 'Keys should be supplied');
    keyVal = 'not-set-key' + shortid.generate();
  }
  if (!valueVal) {
    valueVal = 'not-set-id' + shortid.generate();
    invariant(valueVal, 'Value should be supplied');
  }
  return attachObject(source, targetDepth, keyVal, valueVal);
};

function attachObject(source, targetDepth, keyVal, valueVal) {

  var depth = null;

  function iterate(source, depth, targetDepth, keyVal, valueVal) {
    for (var key in source) {

      if (depth === targetDepth) {
        source[keyVal] = valueVal;
        return source;
      }
    }
  }
  return iterate(source, depth + 1, targetDepth, keyVal, valueVal);
}