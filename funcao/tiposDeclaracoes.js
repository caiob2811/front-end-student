console.log(soma(3, 4))

// function declaration, pode ser chamada antes de ser declarada
function soma(a,b) {
    return a + b
}

// function expression
const sub = function (a,b) {
    return a - b
}
console.log(sub(3, 4))

// named function expression
const multi = function mult(x,y) {
    return x * y
}
console.log(multi(3, 4))