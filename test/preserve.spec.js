import expect from 'expect'
import {preserve} from '../src/index'
import {test3} from './helpers/testSheet2'

describe('preserve', () => {

    it('should make an object immutable', () => {
        const preserveObj = preserve(test3, 'val')
      expect(preserveObj).toBeAn(Object)
    })
})
