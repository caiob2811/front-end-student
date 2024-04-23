// novo recurso do es2015

const pessoa = {
    nome : 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
const {nome, idade} = pessoa // tira de dentro do objeto...
console.log(nome, idade)

const {endereço: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
