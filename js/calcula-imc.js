
//pega todos os pacientes da tabela
var pacientes = document.querySelectorAll(".paciente");
//preenche variaveis com valores dos pacientes
for(var i=0 ;i < pacientes.length; i++){
  var paciente = pacientes[i];

//Pega a td e o peso
  var td_peso = paciente.querySelector(".info-peso");
  var peso = td_peso.textContent;
//Pega a td e a altura
  var td_altura = paciente.querySelector(".info-altura");
  var altura = td_altura.textContent;

  var td_imc = paciente.querySelector(".info-imc");

  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  //Realiza varificações para verificar entrada de dado
  if(!pesoEhValido){
    console.log("Peso invalido");
    td_imc.textContent = "Peso invalido";
    //pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }
  if(!alturaEhValida){
    console.log("Altura invalido");
    td_imc.textContent = "Altura invalido";
    //alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }
  // calcula imc
  if(alturaEhValida && pesoEhValido){
    td_imc.textContent = calculaImc(peso,altura);
  }

}

function validaPeso(peso){
  if(peso>0 && peso<700){
    return true;
  }else{
    return false;
  }
}
function validaAltura(altura){
  if(altura>0 && altura<=3){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso/(altura * altura);
  return imc.toFixed(2);
}
