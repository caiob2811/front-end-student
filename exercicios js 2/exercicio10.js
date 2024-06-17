/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function simboloMais(num) {
    return '+'.repeat(num)
}

console.log(simboloMais(10))

//outra forma

function simboloMais2(num) {
   let resultado = ''
   for(i = 0; i < num; i ++) {
    resultado += '+'
   }
   return resultado
}

console.log(simboloMais2(4))
