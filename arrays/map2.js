 const carrinho = [
    '{"nome": "Coxinha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
 ]

 const paraObjeto = json => JSON.parse(json) // transforma as Strings(texto) em Objetos
 const apenasPreco = produto => produto.preco // seleciona apenas o preco

 const resultado = carrinho.map(paraObjeto).map(apenasPreco)
 console.log(resultado)