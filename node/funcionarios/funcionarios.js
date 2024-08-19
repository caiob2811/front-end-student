const url = 'http://files.cod3r.com.br/funcionarios.json'
const axios = require('axios') //clientHTTP faz requisicoes HTTP

const chineses = f => f.pais === 'China' // se for estritamente igual retorna true
const mulheres = f => f.genero === 'F' // se for estritamente igual retorna true
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario 
    ? func : funcAtual // então retorne = ?, : = se não
}

axios.get(url).then(response => {  //faz a requisição nessa url // pra obter o conteúdo do arquivo usa o response
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com o menor salario
    const func = funcionarios
        .filter(funcionarios)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})