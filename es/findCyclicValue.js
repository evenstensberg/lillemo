// Finds the cyclic value inside an object
import { errorMessage } from './utils/errorMessage';
import { iterate } from './utils/isSelfAttached';

module.exports = function findCyclicValue(source) {
  if (source.prototype.circularRef) {
    for (var key in source) {
      if (source[key] !== key) {
        iterate(source, 0);
      }
      if (source.hasOwnProperty(key) && key === source) {
        return source[key];
      }
    }
  } else {
    errorMessage(source, source + ' is not a circular reference');
  }
  return;
};