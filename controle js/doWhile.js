function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //somente iniciada a variável, sem valor inicial!

do { // faça // vai fazer até achar a opção -1
    opcao = getInteiroAleatorioEntre(-1, 11)
    console.log(`Opção escolhida foi ${opcao}.`)
} while(opcao != -1)

console.log('Até a próxima!')