function calcular(){

    const peso = document.getElementById('Peso').value;
    const altura = document.getElementById('Altura').value;

    if (!peso || !altura || !peso.includes('.') || !altura.includes('.')) {
        document.querySelector('p').innerHTML = "Os valores de peso e altura devem ser números de ponto flutuante.";
        document.getElementById('Resultado').value = "";
        return;
    }

    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);


    if (pesoFloat <= 0 || alturaFloat <= 0) {
        document.querySelector('p').innerHTML = "Peso e altura devem ser maiores que zero.";
        document.getElementById('Resultado').value = "";
        return;
    }

    const imc = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1);
    
    if (isNaN(imc)) {
        imc = "";
    }

    document.getElementById('Resultado').value = imc;
    
    let classificacao = "";
    
    if(imc < 18.5){
        classificacao = "Abaixo do peso Normal!";
    }else if(imc >= 18.5 && imc <= 24.9){
        classificacao = "Peso Normal!";
    }else if(imc >= 25.0 && imc <= 29.9){
        classificacao = "Excesso de Peso!"
    }else if(imc >= 30.0 && imc <= 34.9){
        classificacao = "Obesidade classe I"
    }else if(imc >= 35.0 && imc <= 39.9){
        classificacao = "Obesidade classe II"
    }else if(imc >= 40){
        classificacao = "Obsesidade Classe III"
    }else{
        classificacao = ""
    }
    
    document.querySelector('p').innerHTML = classificacao;
}



function limpar(){
    document.getElementById('Resultado').value = "";
    document.getElementById('Peso').value = "";
    document.getElementById('Altura').value = "";
    document.querySelector('p').innerHTML = "";
}


