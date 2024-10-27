let nomes = ['Caio', 'Alisson' , 'João' , 'Isaías' , 'Josué']

function quemVaiPagarOAlmoco (nomes) {
    let totalPessoas = nomes.length
    let posicaoAleatória = Math.floor(Math.random() * totalPessoas) 
    let resultado = nomes[posicaoAleatória]

    return resultado + ' vai pagar o almoço'
}

console.log(quemVaiPagarOAlmoco(nomes))