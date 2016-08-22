'use strict';

var _errorMessage = require('./utils/errorMessage');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = function (source) {
  var depthlevels = [];
  if (!source) {
    (0, _errorMessage.errorMessage)(source, null);
  }
  function iterate(source, depth) {
    Object.keys(source).forEach(function (child) {

      // Ensure we aren't iterating over some string. This needs to be fixed
      if (child === '0' || child === '1' || child === '2' || child === '3' || child === '4' || child === '5' || child === '6') {
        return true;
      }
      if (depthlevels.length > 10) {
        return true;
      }
      depthlevels.push(depth);
      if (depth >= 7) {
        (0, _invariant2['default'])(source, source + ' cannot have more than seven levels, as this will be inefficient.');
        return true;
      }
      iterate(source[child], depth + 1);
    });
  }
  iterate(source, 0);
  return Math.max.apply(Math, depthlevels);
};