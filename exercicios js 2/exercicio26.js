/* Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais. */

function removerVogais(frase) {
    return frase.replace(/[aeiouAEIOU]/ig, '')
}
console.log(removerVogais('Ola mundo'))
console.log(removerVogais('Sou uma frase'))
console.log(removerVogais('Me divirto programando'))
