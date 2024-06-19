//Escreva uma função que receba um array de números e retornará a soma de todos os números desse array

function somarNumeros(numeros) {
   const resultado = numeros.reduce((acumulador,numeroAtual) => (acumulador + numeroAtual))

   return resultado
}

console.log(somarNumeros([1, 10]))
console.log(somarNumeros([15, 15, 15, 15]))
console.log(somarNumeros([10, 10, 10]))