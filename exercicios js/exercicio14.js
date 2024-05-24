// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console.
function sacolao(frutas) {
    switch(frutas) {
        case 'maçã':
        return 'Não vendemos essa fruta aqui'

        case 'kiwi':
        return 'Estamos com escassez de kiwis'

        case 'melancia':
        return 'Aqui está R$ 3 reais o quilo!'

        break
        default:
        return 'não vendemos essa fruta aqui (:'
    }
}

console.log(sacolao('maçã'))
console.log(sacolao('kiwi'))
console.log(sacolao('melancia'))
console.log(sacolao('banana'))
console.log(sacolao('pera'))
console.log(sacolao('laranja'))