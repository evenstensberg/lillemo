'use strict';

exports.__esModule = true;
exports.errorMessage = errorMessage;
function errorMessage(err, custom) {
  if (custom) {
    throw new Error('' + custom);
    return true;
  }
  if (err) {
    throw new Error(err + ' returned an unexpected type or value');
  }
  if (typeof console !== undefined && typeof console.error === 'function') {
    console.error(err);
    return true;
  }
  return false;
}