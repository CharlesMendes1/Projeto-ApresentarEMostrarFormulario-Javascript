

// para ler botão do formulario
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
  //parando comportamento padrão
  event.preventDefault();
  //pegando form
  var form = document.querySelector("#form-adiciona");

  //pegando campos do form e volta um obj
  var paciente = obtemPacienteDoFormulario(form);

  //criando tr da tabela, e suas respectivas td
  var pacienteTr = montaTr(paciente);

  //valida dados do paciente
  var erros = validaPaciente(paciente);
  if(erros.length > 0){
    exibeMensagemDeErro(erros);
    //estamos dertro de uma função, dando return, sai da função
    return;
  }



  //adiciona paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);


//limpa formulario
  form.reset();

//tira erros que são demonstrados em cima do formulario
//zerando ul que tem os erros, caso tenha algum erro mostrando na tela
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

});
function exibeMensagemDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  for(var i=0 ; i<erros.length ; i++){
    var li = document.createElement("li");
    li.textContent = erros[i];
    ul.appendChild(li);
  }
}

function validaPaciente(paciente){
  var erros = [];
  if(paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco");
  }
  if(paciente.peso.length == 0){
    erros.push("O peso não pode ser em branco");
  }
  console.log(validaPeso(paciente.peso));

  if(validaPeso(paciente.peso) == false){
    erros.push("O peso é invalido");
  }
  if(paciente.altura.length == 0){
    erros.push("O altura não pode ser em branco");
  }
  if(validaAltura(paciente.altura) == false){
    erros.push("O altura é invalido");
  }
  if(paciente.gordura.length == 0){
    erros.push("O gordura não pode ser em branco");
  }
  return erros;
}

function obtemPacienteDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
  }

  return paciente;
}

function montaTd(valor,classe){
  //criando td de tabela
  var td = document.createElement("td");
  //coloca classe dentro de td
  td.classList.add(classe);
  //coloca dado dentro da td
  td.textContent = valor;

  return td;
}
function montaTr(paciente){
  //Cria tr
  var pacienteTr = document.createElement("tr");
  // adiciona classe css paciente dentro da tr
  pacienteTr.classList.add("paciente");

  //Cria as TD's, adiciona classes css e a adiciona dentro da TR
  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

  // retorna a TR
  return pacienteTr;
}

function adicionaPacienteNaTabela(paciente){
  //monta tr do paciente
    var pacienteTr = montaTr(paciente);

    //adiciona paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}
