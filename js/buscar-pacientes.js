//Para buscar pacientes em uma tela interna
var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click",function(){
  //objeto especializado em requisições javascript
  var xhr = new XMLHttpRequest();
  //usa função open para configurar o objeto XMLHttpRequest
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  //enviando requisição para o servidor
  xhr.send();
  //load serve para ouvir se a requisição para o servidor gerou alguma resposta
  xhr.addEventListener("load", function() {
      if(xhr.status == 200){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
      }else{
        var erro = document.querySelector("#erro-ajax");
        erro.classList.remove("invisivel");
      }
  });

});
