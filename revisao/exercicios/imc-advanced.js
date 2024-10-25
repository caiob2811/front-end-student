function imcAdvanced(peso, altura) {
    let imc = peso / Math.pow(altura, 2); 

    if (imc < 18.5) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Você está abaixo do peso, considere se alimentar melhor.';
    } 
    
    if (imc >= 18.5 && imc <= 24.9) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Peso normal, boa!';
    } 

    if (imc >= 25 && imc <= 29.9) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Sobrepeso.';
    } 

    if (imc >= 30 && imc <= 34.9) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Obesidade grau 1.'; 
    } 

    if (imc >= 35 && imc <= 39.9) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Obesidade grau 2.'; 
    } 

    if (imc >= 40) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Obesidade grau 3.'; 
    }
}

console.log(imcAdvanced(71,1.73))

// ou 

function imc2(peso, altura) {
    let imc = peso / Math.pow(altura, 2); 

    if (imc < 18.5) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Você está abaixo do peso, considere se alimentar melhor.';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Peso normal, boa!';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Sobrepeso.';
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Obesidade grau 1.'; 
    } else if (imc >= 35 && imc <= 39.9) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Obesidade grau 2.'; 
    } else if (imc >= 40) {
        return 'Seu IMC é ' + Math.floor(imc) + '. Obesidade grau 3.'; 
    }
}

console.log(imc2(70,1.73))

