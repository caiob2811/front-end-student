// função que tem capacidade de assumir outra como entrada
function soma(num1, num2) {
    return num1 + num2
}

function subtracao (num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function modular(num1, num2) {
    return num1 % num2
}

function calculator (num1, num2, operator) { // tipo aqui
    return operator(num1, num2)
}

console.log(calculator(3, 2, soma))
console.log(calculator(2, 3, subtracao))
console.log(calculator(3, 2, multiplicar))
console.log(calculator(4, 2, dividir))
console.log(calculator(4, 2, modular))