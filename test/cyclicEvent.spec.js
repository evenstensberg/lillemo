import expect from 'expect'
import {createCircularEvent} from '../src/index'
import {regularObject} from './helpers/testSheet2'
import {cyclicObject} from './helpers/testSheet1'

/*
 * No point of extensive unit testing here, we are just cloning the object we got
 * and warn about a cyclic dep otherwise, if the bool flag is true
 */
describe('createCircularEvent', () => {

    it('should convert a regular value to an cyclic value', () => {
      const regObj = createCircularEvent(regularObject, false)
      expect(regObj.ue).toBe('is My Name')
    })
})
