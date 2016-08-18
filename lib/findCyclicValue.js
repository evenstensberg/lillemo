'use strict';

var _errorMessage = require('./utils/errorMessage');

var _isSelfAttached = require('./utils/isSelfAttached');

// Finds the cyclic value inside an object
module.exports = function findCyclicValue(source) {
  if (source.prototype.circularRef) {
    for (var key in source) {
      if (source[key] !== key) {
        (0, _isSelfAttached.iterate)(source, 0);
      }
      if (source.hasOwnProperty(key) && key === source) {
        return source[key];
      }
    }
  } else {
    (0, _errorMessage.errorMessage)(source, source + ' is not a circular reference');
  }
  return;
};