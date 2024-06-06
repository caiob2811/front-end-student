console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() { //reverter
    return this.split('').reverse().join() //split = quebra a string em cada uma das letras, join junta os elementos na string 
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this [0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Quebrou'
}

console.log('Escola Cod3r'.reverse())