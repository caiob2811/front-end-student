// map + concat
const escola = [{ 
    nome: 'turma M1',
    alunos: [{
        nome: 'João',
        nota: 8.1
}, {
        nome: 'Maria',
        nota: 9.3
    }]
} , {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Pedro',
        nota: 8.9
    }, {
        nome: 'Ana',
        nota: 7.3
    }]
}]

const getNotasDoAluno = a => a.nota
const getNotasDaTurma = t => t.alunos.map(getNotasDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3]))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = (escola.flatMap(getNotasDaTurma))
console.log(notas2)