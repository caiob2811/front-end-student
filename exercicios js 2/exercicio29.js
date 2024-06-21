// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaior (numeros) {
    return [...numeros].sort((a,b) => b - a)[1]
}

console.log(segundoMaior([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(segundoMaior([1, 3, 6, 9, 12, 15, 17]))