// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavras(string) {
   const palavras = string.split(" ")
   return palavras.length
}

console.log(contarPalavras('Ola mundo'))
console.log(contarPalavras('Sou uma frase'))
console.log(contarPalavras('Me divirto programando'))
