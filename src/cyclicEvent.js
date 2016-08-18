// create an cyclic event with your object. I.E a = cyclicEvent(b, ..)
import {errorMessage} from './utils/errorMessage'
import {isCyclic} from './utils/isCyclic'

  /* consider dropping this, as we only need API to handle cyclic references, instead
   * if this is more approachable, go for classes instead,as I can then use constructor
   * to bind the object to itself rather than to use .call(..) or .apply(..)
   */
module.exports = function(source, boolean) {
  if(!source) {
    errorMessage(source, null)
  }
  if(typeof boolean !== 'boolean') {
    errorMessage(null, 'Your second argument should be true or false')
  }
  if(boolean === true && isCyclic(source)) {
    console.warn(`${source} already contain circular references.`)
  }
  return Object.assign({}, source)
}
