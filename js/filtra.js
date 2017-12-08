//pega campo input de pesquisa
var campoDeBusca = document.querySelector("#filtrar-tabela");
//input pega o que é digitado no teclado detro do campo input HTML
campoDeBusca.addEventListener("input",function(){
  //pega todas tr dos pacientes
  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0 ){
    pacientes.forEach(function(paciente){

      //pegar td do paciente
      var tdNome = paciente.querySelector(".info-nome");
      var nomeDentroDaTd = tdNome.textContent;

      //faz expressão regular com RegExp
      //"i" é case-insensitive: entra tanto PAPA ou papa
      var expressao = new RegExp(campoDeBusca.value, "i");

      //verificacao se nomeDentroDaTd esta contida em expressao(campoDeBusca)
      if(expressao.test(nomeDentroDaTd)){
          paciente.classList.remove("invisivel");
      }else{
          paciente.classList.add("invisivel");
      }



    });
  }else{
    //Se caso usuario não tenha digitado nada faça o q esta em baixo
    pacientes.forEach(function(paciente){
      //remove a classe invisivel, deixando todas tr's visiveis
      paciente.classList.remove("invisivel");
    })
  }
});
