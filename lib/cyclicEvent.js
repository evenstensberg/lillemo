'use strict';

var _errorMessage = require('./utils/errorMessage');

var _isRoot = require('./utils/isRoot');

var _attach = require('./attach');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _validate = require('./utils/validate');

var _isCyclic = require('./utils/isCyclic');

var _isSelfAttached = require('./utils/isSelfAttached');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* consider dropping this, as we only need API to handle cyclic references, instead
 * if this is more approachable, go for classes instead,as I can then use constructor
 * to bind the object to itself rather than to use .call(..) or .apply(..)
 */
module.exports = function (source, boolean) {

  if (typeof boolean !== 'boolean') {
    (0, _errorMessage.errorMessage)(null, 'Your second argument should be true or false');
  }

  try {
    // check if our objects meet  our requirements
    (0, _validate.validate)(source);
  } catch (e) {
    // catch any errors
    (0, _errorMessage.errorMessage)(e, null);
  }
  if (boolean === true && (0, _isCyclic.isCyclic)(source)) {
    console.warn(source + ' already contain circular references.');
  }
  return Object.assign({}, source);
}; // create an cyclic event with your object. I.E a = cyclicEvent(b, ..)