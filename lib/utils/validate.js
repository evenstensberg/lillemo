'use strict';

exports.__esModule = true;
exports.validate = validate;

var _errorMessage = require('./errorMessage');

function validate(obj) {
  if (typeof obj === undefined || typeof obj === null) {
    (0, _errorMessage.errorMessage)(obj);
  }
  if (typeof obj === 'function') {
    throw new SyntaxError(obj + ' returned an function. Expected an actual object.');
  }
  return true;
}