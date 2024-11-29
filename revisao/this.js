// function teste1 () {
//     console.log(this === window)
// }

// teste1()

document.getElementsByTagName('body')[0].onclick = teste1

function teste2 () {
     console.log(this === document)
}

teste2()

const body = document.getElementsByTagName('body')[0]

function teste1 () {
    console.log(this === body)
}

teste1()

document.getElementsByTagName('body')[0].onclick = teste1

const teste3 = () => console.log(this === window)
teste3()

document.getElementsByTagName('body')[0].onclick = teste3

// this referencia a objeto caso você não queira chamar ele pelo nome dele, o você this, exemplo: 

const pessoa1 = {
    name: 'Caio', idade: 20,
    mostrarNome: function () {
        return console.log(this.name)
    }
}

pessoa1.mostrarNome()

// ou

function getThis () {
    return this
}

const pessoa11 = {
    name: 'Caio', idade: 20,
}

const pessoa2 = {
     name: 'kiwi', idade: 55,
}

pessoa1.getThis = getThis
pessoa2.getThis = getThis

console.log(pessoa1.getThis())


// o this pode variar de acordo como eu chamo a function ja com a arrowFunction não varia () =>