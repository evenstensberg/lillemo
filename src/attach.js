// Add an cyclic event to an existing one
import {errorMessage} from './utils/errorMessage'
import shortid from 'shortid'
import _ from 'lodash'

module.exports = function(source, targetDepth, keyVal, valueVal) {
    if(!source) {
      errorMessage(source, null)
    }
    let key = _.cloneDeep(keyVal)
    let value = _.cloneDeep(valueVal)
    let copySource = Object.assign({}, source)
    if(typeof source !== 'object') {
       errorMessage(source, null)
       return null
    }
    if(typeof targetDepth !== 'number') {
      errorMessage(null, `${targetDepth} should be an object`)
    }
    if(!keyVal) {
      key = 'not-set-key' + shortid.generate()
    }
    if(!valueVal) {
      value = 'not-set-id' + shortid.generate()
    }
    return Object.assign({}, attachObject(copySource, targetDepth, key, value))
}

function attachObject (source, targetDepth, key, value) {
      let depth = 0
      function iterate (source, depth, targetDepth, key, value) {
        Object.keys(source).forEach( (k) => {
          if(depth === 7) {
            invariant(source, `${source} cannot have more than seven levels, as this will be inefficient.`)
            return source
          }
          if(depth === targetDepth) {
            source[key] = value
            return source[key]
          }
          else {
            iterate(source[k], depth + 1, targetDepth, key, value)
          }
        })
        return source
      }
      return iterate(source, depth + 1, targetDepth, key, value)
}
