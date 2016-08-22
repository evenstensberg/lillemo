'use strict';

var _errorMessage = require('./utils/errorMessage');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = function (source, targetObject) {
  if (!targetObject) {
    (0, _errorMessage.errorMessage)(null, targetObject);
  }
  if (!source) {
    (0, _errorMessage.errorMessage)(null, source);
  }
  return traverse(source, targetObject);
};

function traverse(source, targetObject) {
  var depth = 0;
  function iterate(source, depth, targetObject) {
    Object.keys(source).forEach(function (key) {
      if (depth === 7) {
        (0, _invariant2['default'])(source, source + ' cannot have more than seven levels, as this will be inefficient.');
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