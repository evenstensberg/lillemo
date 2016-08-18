import { errorMessage } from './errorMessage';

export function validate(obj) {
  if (typeof obj === undefined || typeof obj === null) {
    errorMessage(obj);
  }
  if (typeof obj === 'function') {
    throw new SyntaxError(obj + ' returned an function. Expected an actual object.');
  }
  return true;
}