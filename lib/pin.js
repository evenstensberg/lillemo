'use strict';

var _isSelfAttached = require('./utils/isSelfAttached');

var _errorMessage = require('./utils/errorMessage');

// Creates an function of you can fire an action if a certain object is met
module.exports = function (source, callback) {
  if (typeof callback !== 'function') {
    (0, _errorMessage.errorMessage)(callback);
  }
  if (source.prototype.circularRef) {
    for (var key in source) {
      if (source[key] !== key) {
        (0, _isSelfAttached.iterate)(source, 0);
      }
      if (source.hasOwnProperty(key) && key === source) {
        return pin.call(source[key], callback);
      }
    }
  } else {
    (0, _errorMessage.errorMessage)(source);
  }
};