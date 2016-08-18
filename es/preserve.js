// Preserve its values, even on changes
import { errorMessage } from './utils/errorMessage';
import { iterate } from './utils/isSelfAttached';

module.exports = function preserve(source, value) {
  /*
    if(typeof value !== 'object') {
      errorMessage(value)
    }
    if() {
      for(value in source) {
      if(source[value] !== value) {
          iterate(source, 0)
      }
      if(source.hasOwnProperty(value) && value === source) {
        Object.defineProperty(source, value, {
          enumerable: true,
          configurable: false,
          writable: false
        });
        return source[value]
      }
    }
    }
    else {
      errorMessage(source)
    }
    */
};