function tratarErroELancar(erro) {
    throw new Error('Desculpe nós estamos consertando isso!') // lançar um erro
}
function imprimirNomeGritado(obj) {
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {  // mesmo se ocorrer um erro, o finally vai ser executado
        console.log('final')
    }
}
const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)