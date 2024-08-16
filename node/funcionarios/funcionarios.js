const url = 'http://files.cod3r.com.br/funcionarios.json'
const axios = require('axios') //clientHTTP faz requisicoes HTTP

axios.get(url).then(response => {  //faz a requisição nessa url // pra obter o conteúdo do arquivo usa o response
    const funcionarios = response.data
    console.log(funcionarios)
})