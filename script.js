const inputPeso = document.querySelector('.input-peso');
const inputAltura = document.querySelector('.input-altura');
const button = document.querySelector('.button');
const textoResultado = document.querySelector('.resultado-p');



function resultado (){

    textoResultado.innerHTML=''


    const peso = inputPeso.value;
    const altura = inputAltura.value;

    const valorImc = peso / (altura * altura)

    if(valorImc < 18.5){
        textoResultado.innerHTML = `IMC ${valorImc.toFixed(2)} Abaixo do peso`
    }else if (Math.round(valorImc) > 18.5 && valorImc < 24.9){
        textoResultado.innerHTML = `IMC ${valorImc.toFixed(2)} peso normal`
    }else if (valorImc > 25 && valorImc < 29.9){
        textoResultado.innerHTML = `IMC ${valorImc.toFixed(2)} Sobrepeso`
    }else if (valorImc > 30 && valorImc < 34.9){
        textoResultado.innerHTML = `IMC ${valorImc.toFixed(2)} Obesidade grau 1`
    }else if (valorImc > 35 && valorImc < 39.9){
        textoResultado.innerHTML = `IMC ${valorImc.toFixed(2)} Obesidade grau 2`
    }else if (valorImc > 40 ){
        textoResultado.innerHTML = `IMC ${valorImc.toFixed(2)} Obesidade grau 3`
    }
    else{
        textoResultado.innerHTML = `Valor digitado incorreto`
    }


}

button.addEventListener('click', resultado)

