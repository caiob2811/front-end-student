/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130.*/
function planoDeSaude(idade) {
    if(idade < 10) {
        return 180
    }else if (idade < 30) {
        return 130
    } else if (idade < 60) {
        return 195
    } else{
        return 230
    }
}


console.log(planoDeSaude(10))
console.log(planoDeSaude(30))
console.log(planoDeSaude(40))
console.log(planoDeSaude(52))
console.log(planoDeSaude(60))
console.log(planoDeSaude(80))
