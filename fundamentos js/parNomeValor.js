// par nome e valor
const saudacao = 'Oi' // contexto lexico

function exec() {
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

// objetos sao grupos aninhados de pares nome/valor
const Cliente = {
    nome: ' Pedro',
    idade: 32,
    peso:85,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)