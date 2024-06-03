// coleção dinamica de pares chave/valor
const produto = new Object 
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ['marca do produto']

console.log(produto)


const carro = {
    nome: 'Audi',
    valor: 3999.90,
    proprietario: {
        nome: 'João',
        idade : 56,
        endereco : {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },    
        condutores : [{
            nome: 'Ana',
            idade: 42
        }, {
            nome: 'Pedro',
            idade: 19  
        }],
        calcularValorSeguro : function() {
            // ....
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)