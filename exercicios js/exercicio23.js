/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function notaAluno (codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1,nota2,nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let media = (notas[0] *4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do aluno: ${codAluno}. Notas: ${nota1}, {nota2}, ${nota3}. ${media < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

notaAluno(123, 5.8, 6, 9.5)