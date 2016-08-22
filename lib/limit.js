'use strict';

var _findDepth = require('./findDepth');

var _findDepth2 = _interopRequireDefault(_findDepth);

var _errorMessage = require('./utils/errorMessage');

var _errorMessage2 = _interopRequireDefault(_errorMessage);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = function (source, objectPath, level) {
  if (!source) {
    (0, _errorMessage2['default'])(source, null);
  }
  if (!objectPath) {
    (0, _errorMessage2['default'])(null, 'The path must be supplied in order to limit the obj');
  }
  var clonedPath = _lodash2['default'].cloneDeep(objectPath);
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
            value: depth < level ? source[key] : _shortid2['default'].generate()
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