function Carro (velocidadeMaxima = 200, delta = 5) { //parametro padrão
    // atributo privado cria com let ou const
    let velocidadeAtual = 0;
    
    // metodo publico pra ser visivel fora dessa função
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico cria com this
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const bugatti = new Carro(350, 20)
bugatti.acelerar()
bugatti.acelerar()
bugatti.acelerar()
console.log(bugatti.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof new Carro)
