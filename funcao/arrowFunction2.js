function Pessoa () {
    this.idade = 0

    setInterval(() => {
    this.idade++ // this fica fixo quando usa uma arrow function
    console.log(this.idade) 
    }, 1000)
}

new Pessoa
