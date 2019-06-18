
// 1
function  func1() {}

// 2
const func2 = function() {}

// armazenar em um Array
const array = [function(a,b) { return b + a }, func1, func2]

console.log(array[0](1,2))

// add a um obj

const obj = {}

obj.falar = function() { return 'OpA'}
console.log(obj.falar());

//passando como param
function run(fun) {
    fun()
}

run(function() { console.log('executando....')})

//uma function pode retornar/;conter uma outra function

function soma(a,b) {
    return function(c) {
        console.log(a + b + c);
    }
}

soma(3,2)(4)
const cincoMais = soma(1,2)
cincoMais(3)
