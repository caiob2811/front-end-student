// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function lerVetor(vetor) {
   let qtdPares = 0
   let qtdImpares = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor [i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} pares e ${qtdImpares} impares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
lerVetor(vetor)

