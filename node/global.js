/* console.log(global) */

global.app = Object.freeze({  // criando uma variável global
    saudacao () {
        return 'Estou aqui!'
    },
    nome: 'Node legal'
})