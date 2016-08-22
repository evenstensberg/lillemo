import invariant from 'invariant';
import { errorMessage } from './utils/errorMessage';

module.exports = function (source, targetObject, callback) {
  if (!source || typeof source !== 'object') {
    errorMessage(source, null);
  }
  if (!targetObject) {
    throw new Error('An target object must be supplied');
  }
  if (!callback) {
    return targetObject;
  }
  return traverse(source, targetObject, callback);
};
function traverse(source, targetObject, callback) {
  var depth = 0;
  function iterate(source, depth, targetObject, callback) {
    Object.keys(source).forEach(function (key) {
      if (depth === 7) {
        invariant(source, source + ' cannot have more than seven levels, as this will be inefficient.');
        return source;
      }
      if (targetObject === source[key] && callback && typeof callback === "function") {
        callback();
      }
      if (targetObject !== source[key]) {
        return iterate(source[key], depth + 1, targetObject, callback);
      }
    });
  }
  iterate(source, depth + 1, targetObject, callback);
  return source;
}