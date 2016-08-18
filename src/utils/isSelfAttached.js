/* map through node tree and find the values and
if the source has own values attached, throw
*/

export function isSelfAttached(source) {

  let seenObjects = []
  let caughtObjects = []

  function iterate(source) {
    if (source && typeof source === 'object') {
      if (caughtObjects.indexOf(source) !== -1) {
        return true
      }
      seenObjects.push(source)
      for (let key in source) {
        let sourceKey = source[key]

        for(let i = 0; i < seenObjects.length; i++) {
          if(seenObjects[i] === sourceKey) {
            caughtObjects.push(source)
            return true
          }
        }
        if (source.hasOwnProperty(key) && iterate(source[key])) {
          return false
        }
      }
    }
    return false
  }
  return iterate(source)
}
