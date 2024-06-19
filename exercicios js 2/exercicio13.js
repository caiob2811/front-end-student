/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function filtrarNumeros(array) {

    return array.filter(item => typeof item === "number")
    
}
    
console.log(filtrarNumeros([1, 2, 3, "a", "b", 4]))