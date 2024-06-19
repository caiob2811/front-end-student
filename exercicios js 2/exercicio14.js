/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
*/

function objToArray(objeto) {
   const chaves = Object.keys(objeto)
   const resultado = chaves.map(chaves => [chaves, objeto[chaves]])

   return resultado
}

console.log(objToArray({nome: "Maria", profissao: "Desenvolvidora Web"}))

console.log(objToArray({codigo: 111, preco: 10.00}))