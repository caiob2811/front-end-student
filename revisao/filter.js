const produtos = [
    { nome: 'Notebook', preco: 2499.00, fragil: true},
    { nome: 'Ipad', preco: 4199.00, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

function maiorQueSetecentos (p) {
    return p.preco >= 700
}

function frageis(p) {
  return p.fragil  
}

console.log(produtos.filter(maiorQueSetecentos).filter(frageis))

/* OU 
const produtos = [
    { nome: 'Notebook', preco: 2499.00, fragil: true},
    { nome: 'Ipad', preco: 4199.00, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

function menorQueSetecentos (p) {
    return p.preco <= 700
}

function frageis(p) {
    return p.fragil === false
}

console.log(produtos.filter(maiorQueSetecentos).filter(frageis))

0: 
fragil: false
nome: "Copo de plástico"
preco: 18.99
*/

// como funciona o filter 

Array.prototype.filter2 = function (callback) {
    const newArray = []
    
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { //array valor atual, indice, proprio array
            newArray.push(this[i])
        }
    }
     return newArray
}


const produtoss = [
    { nome: 'Notebook', preco: 2499.00, fragil: true},
    { nome: 'Ipad', preco: 4199.00, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

function maiorQueSetecentos (p) {
    return p.preco >= 700
}

function frageis(p) {
  return p.fragil  
}

console.log(produtoss.filter2(maiorQueSetecentos).filter2(frageis))




// praticando

const words = ['spray', 'hello', 'html', 'palavra', 'coroa']

function wordQuantity (w) {
    return w.length > 4
}

console.log(words.filter(wordQuantity))