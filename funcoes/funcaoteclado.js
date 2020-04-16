var press = 0;//validador para ler o teclado
var press2  = 0;//validador para ler os audios
var atalho = [];//array para guardar a tecla e o audio q vão formar o atalho
var listaAtalhos = [];//lista de atalhos existentes
criaListaResumo();

//cria a lista de atalhos
function criaListaAtalhos(){
  var obj = document.cookie.split(",");
  for(var i=0;i<obj.length-1;i++){
    listaAtalhos[i] = [obj[i].split(":")];
  }  
  criaListaResumo();
}
//chama o criador de lista casao já exista algum registro nos cookies
if(document.cookie.length>0){
  criaListaAtalhos(); 
  console.log(listaAtalhos);
}

//cria a lista de atalhos 
function criaListaResumo(){
  alert("s");
  $('#listaDeAtalhos').empty();
  for (var i = 0; i < listaAtalhos.length; i++) {
    var nome = listaAtalhos[i][0][2];
    var letra = String.fromCharCode(listaAtalhos[i][0][0]);
    var id = listaAtalhos[i][0][1];
    $('#listaDeAtalhos').append('<a href="#" class="w3-round w3-bar-item w3-button w3-padding"><i class="fas fa-times-circle"onclick="deletaAtalho('+id+','+listaAtalhos[i][0][0]+')"></i> <i class="fas fa-play"onclick="tocaAudio('+id+')"></i>    '+letra+' = '+nome+'</a>');
   
  }
}

//toca o audio da lista de atalhos
function tocaAudio(idAudio){
  document.getElementById(idAudio).play();
}


//deleta atalho
/*
function deletaAtalho(id,tecla){
  var novaLista = "";
  for (var i = 0; i < listaAtalhos.length; i++) {
      if(listaAtalhos[i][0][0] != tecla && listaAtalhos[i][0][1] != id){
        novaLista += listaAtalhos[i][0][0]+":"+listaAtalhos[i][0][1]+":"+listaAtalhos[i][0][2]+",";
      }
  }
  document.cookie = novaLista;
  alert(novaLista);
  alert(document.cookie);
  criaListaAtalhos();
}
*/

$(function(){
  //ouve o botão q começa a criação de um atalho
  $('#bt').click(function(){
    press = 1;
  });
  //fica escutando o teclado
  $('body').keypress(function(event){
    var tecla = event.keyCode;
    if(press == 1){//verifica se o botão foi apertado se sim permite q seja registrada a tecla apertada
      alert(tecla);
      atalho[0] = tecla;
      press = 0;//trava o registro de teclas ate o botão ser apertado novamente
      press2 = 1;//libera o registro do audio 
    }else{
      for (var i = 0; i < listaAtalhos.length; i++) {
        console.log(listaAtalhos[i][0][0]+"="+tecla);
        if(listaAtalhos[i][0][0] == tecla){
          document.getElementById(listaAtalhos[i][0][1]).play();
        }        
      }
    }

  });

});
//seleciona o audio para criar o atalho
function selcAudio(idAudio,nameAudio){
  if(press2 == 1){//verifica se o registro do audio foi liberado pelo passo anterior 
    alert(idAudio);
    atalho[1] = idAudio;
    press2 = 0;//trava o registro de audio ate um novo procedijento de criar atolhos ser iniciado
    document.cookie += atalho[0]+":"+atalho[1]+":"+nameAudio+",";
    criaListaAtalhos();//atualiza a lista de atalhos
    console.log(document.cookie);
  }

  
}




/*
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 108) {
      document.getElementById('4').play();
    }
    if (e.keyCode == 68) {
        document.getElementById('1').play();
      }

  });

  {"0":"1","cod_audio":"1","1":"drag\u00e3o1","nome_audio":"drag\u00e3o1","2":"test test","descricao":"test test","3":"monstro","categoria":"monstro","4":"wav","tipo":"wav","5":"audios\/f8b1c840c06c4036f2d6a63401813377.wav","audio":"audios\/f8b1c840c06c4036f2d6a63401813377.wav","6":"img\/0318666ef0e3f930082722d975e83488.jpg","imagem":"img\/0318666ef0e3f930082722d975e83488.jpg"},{"0":"2","cod_audio":"2","1":"drag\u00e3o1","nome_audio":"drag\u00e3o1","2":"test test","descricao":"test test","3":"monstro","categoria":"monstro","4":"mpeg","tipo":"mpeg","5":"audios\/49bb1d05ed61fccd534bc82c206f7789.mp3","audio":"audios\/49bb1d05ed61fccd534bc82c206f7789.mp3","6":"img\/13c0e9bebd002c25b6b87d0a9c6a5896.jpg","imagem":"img\/13c0e9bebd002c25b6b87d0a9c6a5896.jpg"},
*/