const numbers = [1, 2, 3, 4, 5, 6]

let result = numbers.map(function(e) {
    return e * 2
})

console.log(result)

const sum10 = function(e) {
    return e + 10
}


const multiply = function(e) {
    return e * 3
}

const forMoney = function(e) {
    return `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
}

result = numbers.map(sum10).map(multiply).map(forMoney)

console.log(result)

// map com json

const shoppingCart = [
    '{"name": "Iphone", "price": 4851.00}',
    '{"name" : "MacBook", "price": 6750.00}',
    '{"name" : "caneta", "price": 7.50}',
]

const forObject = function (json) { // retornar em string o array
    return JSON.parse(json)
}

const name = function (nameOfProducts) {
    return nameOfProducts.name
}

const price = function(product) {
    return product.price
}

const resultado1 = shoppingCart.map(forObject).map(name)
const resultado2 = shoppingCart.map(forObject).map(price)

console.log(resultado1)
console.log(resultado2)

// como funciona o map

Array.prototype.map5 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
    
}

const shoppingCartt = [
    '{"name": "Iphone", "price": 4851.00}',
    '{"name" : "MacBook", "price": 6750.00}',
    '{"name" : "caneta", "price": 7.50}',
]

const forObjectt = function (json) {
    return JSON.parse(json)
}

const pricee = function(product) {
    return product.price
}

const resultado = shoppingCart.map5(forObjectt)

console.log(resultado)

//praticando 


const numberss = [40,60,80,100]

function sum (n) {
    return n + 10
}

function multiply (n) {
    return n * 10
}

console.log(numberss.map(sum).map(multiply))
