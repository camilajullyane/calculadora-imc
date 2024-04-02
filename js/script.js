const botao = document.getElementById("calcular");
const div = document.querySelector(".resultado")
const span = document.getElementById("conteudo")


function calcularIMC(event) {
    event.preventDefault()
    let nome = document.querySelector("#input_nome");
    let altura = document.querySelector("#input_altura");
    let peso = document.querySelector("#input_peso");
    let res = "";
    let alturaValue = altura.value.replace(',', '.');

    if(nome.value !== '' && alturaValue !== '' && peso.value !=='') {
        let imc = (peso.value / (alturaValue * alturaValue)).toFixed(1);
        nome.value = "";
        altura.value = "";
        peso.value = "";
        
        if(imc <= 18.5) {
            res = "abaixo do peso";
        } else if(imc >= 18.6 && imc <= 24.9) {
            res = "com peso ideal";
        } else if(imc >=25 && imc <= 29.9) {
            res = "levemente acima do peso";
        } else if(imc >= 30 && imc <= 34.9) {
            res = "com obesidade grau I";
        } else if(imc >= 35 && imc <= 39.9) {
            res = "com obesidade grau II";
        } else if(imc >= 40){
            res = "com obesidade grau III";
        }
        span.textContent = `Seu IMC é ${imc} e você está ${res}`
    }
   
};


botao.addEventListener("click", calcularIMC);
