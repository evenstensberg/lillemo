export let b = {}

b.a = b
b.a.c = b

export const cyclicObject = {
  b
}

export const attachCircular = {
  b
}
