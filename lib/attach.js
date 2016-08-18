'use strict';

var _errorMessage = require('./utils/errorMessage');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = function (source, targetDepth, keyVal, valueVal) {

  if (typeof source !== 'object') {
    source ? (0, _errorMessage.errorMessage)(source, null) : (0, _errorMessage.errorMessage)(null, source);
  }
  if (typeof targetDepth !== 'number') {
    (0, _errorMessage.errorMessage)(null, targetDepth + ' should be an object');
  }
  if (!keyVal) {
    (0, _invariant2['default'])(keyVal, 'Keys should be supplied');
    keyVal = 'not-set-key' + _shortid2['default'].generate();
  }
  if (!valueVal) {
    valueVal = 'not-set-id' + _shortid2['default'].generate();
    (0, _invariant2['default'])(valueVal, 'Value should be supplied');
  }
  return attachObject(source, targetDepth, keyVal, valueVal);
}; // Add an cyclic event to an existing one


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