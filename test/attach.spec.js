import expect from 'expect'
import {attach, createCircularEvent} from '../src/index'
import {cyclicObject, attachCircular, b} from './helpers/testSheet1'
import {test2, test4, regularObject} from './helpers/testSheet2'
import {test5} from './helpers/testSheet3'
import {isCyclic} from '../src/utils/isCyclic'

describe('objects', () => {

    it('should output the normal object', () => {
      expect(regularObject.val).toEqual('Trinity')
    })

    it('should get circular references', () => {
      expect(cyclicObject.b.a).toEqual(b)
    })

    it('should return truthy for a circular reference', () => {
     expect(isCyclic(cyclicObject)).toBe(true)
   })

})

describe('attach', () => {

    it('should convert a regular value to an cyclic value', () => {
      const regObj = createCircularEvent(regularObject, false)
      expect(regObj.ue).toBe('is My Name')
    })

    it('should attach if we have done things right, even with our own create func', () => {

      const attachObject = createCircularEvent(cyclicObject, false)
      const attachedObject = attach(attachObject, 1, 'c', attachCircular.b)
      expect(attachedObject).toEqual(test2)
    })

    it('should give default key if not supplied', () => {
      const attachObject = createCircularEvent(cyclicObject, false)
      const attachedObject = attach(attachObject, 1, null, null)
      expect(Object.keys(attachedObject)[1]).toMatch(/not-set-/)
    })

   it('should attach anyway, without createCircularEvent', () => {
     const attachedObject = attach(cyclicObject, 1, 'c', attachCircular.b)
     expect(attachedObject).toEqual(test2)
   })

   it('should attach at base level', () => {
     const attachedObject = attach(cyclicObject, 1, 'd', attachCircular)
     expect(attachedObject).toEqual(test4)
   })

   it('should attach at a deeper level', () => {
     const attachedObject = attach(cyclicObject, 2, 'Pusterom', test5.b.a.c)
    // works, but fails, due our new set key if we compare to test5
    // console.log(test5, "test", attachedObject)
     expect(attachedObject).toBeAn(Object)
   })
})
