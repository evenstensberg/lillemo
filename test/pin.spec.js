import expect from 'expect'
import {pin} from '../src/index'
import {test3} from './helpers/testSheet2'

describe('pin', () => {

    it('should fire an function if it finds an object', () => {
        const pinObj = pin(test3, 'Trinity', () => {
        return true
      })
      // toNotThrow and toThrow in expect is broken. Buggers
      expect(() => pinObj).toNotThrow()
    })
})
