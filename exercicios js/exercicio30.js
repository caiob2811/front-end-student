function inteiros (vetor) {
   let maior 
   let menor
   for (i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
        maior = vetor [1]
        menor = vetor [1]
        } else {
            if (vetor [i] > maior) {
            maior = vetor [i]
            }
            if(vetor [i] < menor) {
            menor = vetor [i]
            }
        }
    }
    return [maior, menor]
}

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(inteiros(vetor))