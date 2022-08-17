var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 500) {
    console.log("Peso Inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura Inválida!")
    alturaValida = false;
    tdImc.textContent = "Altura Inválido!";
}

if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}