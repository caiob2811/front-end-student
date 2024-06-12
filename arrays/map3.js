Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Coxinha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
 ]

 const paraObjeto = json => JSON.parse(json) // transforma as Strings(texto) em Objetos
 const apenasPreco = produto => produto.preco // seleciona apenas o preco

 const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
 console.log(resultado)