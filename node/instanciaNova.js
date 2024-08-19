 // Uma factory que retorna um objeto
module.exports = () => {
    return { 
        valor: 1,
        inc() {
            this.valor++
        }
    }
} 
// Se quiser criar novas instancias, basta criar uma nova factory.