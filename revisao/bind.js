const pessoa = {
    saudacao: 'Olá, ',
    falar() {
        console.log(this.saudacao) // pessoa.saudacao // this
    }
}

pessoa.falar() // retorna saudacao

const falar = pessoa.falar

falar() // undefined, pois ta apontando para variável global


const falar2 = pessoa.falar.bind(pessoa) // recebe como parâmetro a variavel ou objeto que fixe o this, bind prende, fixa o this para quem eu apontar
falar2()


// falar: function () {
// anotacao antiga
//}



function Pessoa() { //função construtora em maiusculo
    this.idade = 0

    const self = this
    
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)     // congelei o this
}

new Pessoa

//ou 

function Pessoaa() { //função construtora em maiusculo
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)     // congelei o this
}

new Pessoaa

// ou

function Pessoaaa() { //função construtora em maiusculo
    this.idade = 0

    setInterval(() => { //pois a arrowFunction pega o this inserido no contexto e a função pega a global, por isso acima precisa do bind
        this.idade++
        console.log(this.idade)
    }, 1000)  
}

new Pessoaaa