function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){ // enquanto for verdadeira executa
    opcao = getInteiroAleatorioEntre(-1, 11)
    console.log(`Opção escolhida foi ${opcao}.`)
} 
console.log('Até a próxima!')
