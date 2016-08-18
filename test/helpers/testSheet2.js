const val = 'Trinity'
const ue = 'is My Name'

let b = {}
let c = {}
let d = {}

b.a = b
b.a.c = b
c = b
d.b = b
export const regularObject = {
  val,
  ue
}

export const nestedVal = {
  val
}

export const test2 = {
  b,
  c
}

export const test3 = {
  nestedVal
}
export const test4 = {
  b,
  d
}
