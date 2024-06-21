/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */

function identificarPalavras(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(identificarPalavras("pro", ["programação", "mobile", "profissional"]))
console.log(identificarPalavras("java", ["java", "javascript", "profissional"]))
