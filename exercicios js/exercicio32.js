// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
function calcularMedia (vetor){
    let soma = 0
    for(let i=0; i<vetor.length; i++){
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(calcularMedia(vetor))