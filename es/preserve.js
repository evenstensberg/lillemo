import { errorMessage } from './utils/errorMessage';
import invariant from 'invariant';

module.exports = function (source, targetObject) {
  if (!targetObject) {
    errorMessage(null, targetObject);
  }
  if (!source) {
    errorMessage(null, source);
  }
  return traverse(source, targetObject);
};

function traverse(source, targetObject) {
  var depth = 0;
  function iterate(source, depth, targetObject) {
    Object.keys(source).forEach(function (key) {
      if (depth === 7) {
        invariant(source, source + ' cannot have more than seven levels, as this will be inefficient.');
        return source;
      }
      if (targetObject !== key) {
        return iterate(source[key], depth + 1, targetObject);
      }
      if (targetObject === key) {
        delete source[key];
        return;
      }
    });
  }
  iterate(source, depth + 1, targetObject);
  return source;
}