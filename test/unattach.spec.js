import expect from 'expect'
import {unattach} from '../src/index'
import {test3} from './helpers/testSheet2'

describe('unattach', () => {

    it('should delete an key-value pair', () => {
        const unattachedObj = unattach(test3, 'val')
        expect(unattachedObj).toEqual({
          nestedVal: {}
        })
    })
})
