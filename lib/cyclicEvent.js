'use strict';

var _errorMessage = require('./utils/errorMessage');

var _isCyclic = require('./utils/isCyclic');

/* consider dropping this, as we only need API to handle cyclic references, instead
 * if this is more approachable, go for classes instead,as I can then use constructor
 * to bind the object to itself rather than to use .call(..) or .apply(..)
 */
// create an cyclic event with your object. I.E a = cyclicEvent(b, ..)
module.exports = function (source, boolean) {
  if (!source) {
    (0, _errorMessage.errorMessage)(source, null);
  }
  if (typeof boolean !== 'boolean') {
    (0, _errorMessage.errorMessage)(null, 'Your second argument should be true or false');
  }
  if (boolean === true && (0, _isCyclic.isCyclic)(source)) {
    console.warn(source + ' already contain circular references.');
  }
  return Object.assign({}, source);
};