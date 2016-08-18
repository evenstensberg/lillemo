// Creates an function of you can fire an action if a certain object is met
import { iterate } from './utils/isSelfAttached';
import { errorMessage } from './utils/errorMessage';

module.exports = function (source, callback) {
  if (typeof callback !== 'function') {
    errorMessage(callback);
  }
  if (source.prototype.circularRef) {
    for (var key in source) {
      if (source[key] !== key) {
        iterate(source, 0);
      }
      if (source.hasOwnProperty(key) && key === source) {
        return pin.call(source[key], callback);
      }
    }
  } else {
    errorMessage(source);
  }
};