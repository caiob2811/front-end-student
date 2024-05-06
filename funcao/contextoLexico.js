const valor = 'Global'

function minhaFuncao() {
    console.log(valor) // procura essa variável pra executar na função
}

function exec () {
    const valor = 'Local'
    minhaFuncao()
}

exec()