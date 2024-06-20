// Criar uma função que receba um array de números e retorne o menor número desse array

function menorNumero(numeros){
   const menor = Math.min(...numeros)

   return menor

   /* ou
   return Math.min(...numeros)*/
}
console.log(menorNumero([10, 5, 35, 65]))