import expect from 'expect'
import {limit} from '../src/index'
import {regularObject} from './helpers/testSheet2'
import {test7} from './helpers/testSheet3'

// Right now, unit testing is an horrible experince when it comes to error handling,
// If you see toBeAn(Object) anywhere in the source code, this means any action should throw or warn

describe('limit', () => {

    it('should limit the object and modify descriptors based on the second arg', () => {
      const limitObj = limit(regularObject, 'val', 2)
      expect(limitObj).toBeAn(Object)
    })
})
