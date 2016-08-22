'use strict';

var _errorMessage = require('./utils/errorMessage');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = function (source, targetDepth, keyVal, valueVal) {
  if (!source) {
    (0, _errorMessage.errorMessage)(source, null);
  }
  var key = _lodash2['default'].cloneDeep(keyVal);
  var value = _lodash2['default'].cloneDeep(valueVal);
  var copySource = Object.assign({}, source);
  if (typeof source !== 'object') {
    (0, _errorMessage.errorMessage)(source, null);
    return null;
  }
  if (typeof targetDepth !== 'number') {
    (0, _errorMessage.errorMessage)(null, targetDepth + ' should be an object');
  }
  if (!keyVal) {
    key = 'not-set-key' + _shortid2['default'].generate();
  }
  if (!valueVal) {
    value = 'not-set-id' + _shortid2['default'].generate();
  }
  return Object.assign({}, attachObject(copySource, targetDepth, key, value));
}; // Add an cyclic event to an existing one


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