/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetição(elemento, repetição) {
    let array = []
    for(i = 0; i < repetição; i++) {
        array.push(elemento)
    }
    return array
}
console.log(repetição('a', 5))
console.log(repetição(7, 3))