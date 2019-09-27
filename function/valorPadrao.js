'use strict'

// valor padrão 1

function soma(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1

  return a + b + c
}

console.log(soma(2, 1), soma(1, 5, 0), soma(0, 0, 0))

// valor padrão 2

function soma2(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c

  return a + b + c
}

console.log(soma2(), soma2(3), soma2(0, 0, 0))

// ES2015

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(soma3(), soma3(0, 0, 0), soma3(3, 5, 7))