const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // passa o objeto que você quer, para que seja resolvido o this
falarDePessoa()

const falar2 = pessoa.falar
falar2()