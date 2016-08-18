export let b = {}
let e = {}
let king = {}

b.a = b
b.a.c = b
b.a.c.d = b
e.f = {}
e.f.g = {}
king.kong = {}
king.kong.kang = 'Donkey'
e.f.g.h = 'o'

export const test5 = {
  b
}

export const test6 = {
  e
}
export const test7 = {
  king
}
