import expect from 'expect'
import {findDepth} from '../src/index'
import {regularObject} from './helpers/testSheet2'
import {test5, test6} from './helpers/testSheet3'

// Right now, if we find a ciruclar value, we don't validate it.
// Totally crash our build

describe('findDepth', () => {

    it('should find the depth of an object', () => {
      const findDepthOnObject = findDepth(regularObject)
      expect(findDepthOnObject).toEqual(1)
    })
    it('should find deep depths, and stop at level 7 if cyclic', () => {
      const findDepthOnObject = findDepth(test5)
      // this is max depth to avoid cyclic recursion, aka below 7
      expect(findDepthOnObject).toEqual(7)
    })
    it('should find insane deep depth levels', () => {
      const findDepthOnObject = findDepth(test6)
      expect(findDepthOnObject).toEqual(3)
    })
})
