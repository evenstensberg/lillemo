import findDepth from './findDepth';
import errorMessage from './utils/errorMessage';
import shortid from 'shortid';
import _ from 'lodash-es';

module.exports = function (source, objectPath, level) {
  if (!source) {
    errorMessage(source, null);
  }
  if (!objectPath) {
    errorMessage(null, 'The path must be supplied in order to limit the obj');
  }
  var clonedPath = _.cloneDeep(objectPath);
  var clonedSource = Object.assign({}, source);

  function freezeKeys(source, path, level) {
    var depth = 0;
    function iterate(source, depth, path, level) {
      Object.keys(source).forEach(function (key) {

        if (depth === 7) {
          invariant(source, source + ' cannot have more than seven levels, as this will be inefficient.');
          return source;
        }
        if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
          return true;
        }
        if (!level) {
          level = depth + 1;
        }
        if (key === path) {
          Object.defineProperty(source, key, {
            enumerable: true,
            configurable: false,
            writable: false,
            value: depth < level ? source[key] : shortid.generate()
          });
          return true;
        }
        if (key !== path) {
          iterate(source[key], depth + 1, path);
        }
      });
    }
    iterate(source, depth + 1, path, level);
    return;
  }
  freezeKeys(clonedSource, clonedPath, level);
  return clonedSource;
};