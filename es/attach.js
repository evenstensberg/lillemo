// Add an cyclic event to an existing one
import { errorMessage } from './utils/errorMessage';
import shortid from 'shortid';
import _ from 'lodash-es';

module.exports = function (source, targetDepth, keyVal, valueVal) {
  if (!source) {
    errorMessage(source, null);
  }
  var key = _.cloneDeep(keyVal);
  var value = _.cloneDeep(valueVal);
  var copySource = Object.assign({}, source);
  if (typeof source !== 'object') {
    errorMessage(source, null);
    return null;
  }
  if (typeof targetDepth !== 'number') {
    errorMessage(null, targetDepth + ' should be an object');
  }
  if (!keyVal) {
    key = 'not-set-key' + shortid.generate();
  }
  if (!valueVal) {
    value = 'not-set-id' + shortid.generate();
  }
  return Object.assign({}, attachObject(copySource, targetDepth, key, value));
};

function attachObject(source, targetDepth, key, value) {
  var depth = 0;
  function iterate(source, depth, targetDepth, key, value) {
    Object.keys(source).forEach(function (k) {
      if (depth === 7) {
        invariant(source, source + ' cannot have more than seven levels, as this will be inefficient.');
        return source;
      }
      if (depth === targetDepth) {
        source[key] = value;
        return source[key];
      } else {
        iterate(source[k], depth + 1, targetDepth, key, value);
      }
    });
    return source;
  }
  return iterate(source, depth + 1, targetDepth, key, value);
}