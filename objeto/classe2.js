class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao = 'jogador') {
        super(sobrenome) // instanciando a funcao construtora da super classe
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('White')
    }
}

const filho = new Filho
console.log(filho)