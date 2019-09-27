//Higher Order Function

//Forma literal 

function fun1() {}

//Aramazenar em uma variavel

const fun2 = function () {}

//armazenar em um Array

const array = [function (a, b) {
  return a + b
}, fun1, fun2]

console.log(array[0](2, 3))

const obj = {}

obj.falar = function () {
  return 'opa'
}

console.log(obj.falar())

//Passando a função como parametro

function run(fun) {
  fun()
}

fun3 = function () {
  console.log('Executando...')
}

run(fun3)

//Uma função pode conter/retornar uma outra função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)