export function errorMessage(err, custom) {
  if (custom) {
    throw custom;
  }
  if (typeof err === undefined && !custom) {
    throw new SyntaxError('interal failiure');
  }
  if (typeof console !== undefined && typeof console.error === 'function') {
    console.error(err);
  }
}