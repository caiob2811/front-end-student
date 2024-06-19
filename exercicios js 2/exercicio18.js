/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas */

function despesasTotais(itens) {

    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

console.log(despesasTotais([{nome: "Cinema", categoria: "entretenimento", preco: 10.00},
    {nome: "Notebook", categoria: "informatica", preco: 1500.00}
]))

