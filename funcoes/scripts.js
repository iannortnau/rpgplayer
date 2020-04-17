$(function(){
    //solicita e recebe os audios como json e os insere no html
    $.ajax({
        url: 'http://localhost/rpgplayer/requests/getsAudios.php',
        contentType: 'application/json',
        dataType:"json",


        success: function(response) {
            let tbodyEl = $('.divAudios');

            //tbodyEl.html('');
            
            response.forEach(function(Audio) {
                var name = "'";
                name += Audio.nome_audio;
                name+="'";

                tbodyEl.append('<div class="w3-container w3-padding w3-card w3-round w3-white" name="'+Audio.cod_audio+'" style="margin: 10px"> <div class="w3-container"> <p class="w3-center"><img src="'+Audio.imagem+'" class="w3-circle" style="height:200px;width:200px" alt="Avatar"></p> <h4 class="w3-center">'+Audio.nome_audio+'</h4> <p class="w3-center">'+Audio.categoria+'</p> <audio id="'+Audio.cod_audio+'" value="'+Audio.nome_audio+'" controls><source src="'+Audio.audio+'" type="audio/'+Audio.tipo+'"></audio> <hr> <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>Descrição: '+Audio.descricao+'</p> <button type="button" class="w3-button w3-gray w3-round" onclick="selcAudio('+Audio.cod_audio+','+name+')"><i class="fas fa-plus"></i>  Adicionar</button> <br></div> </div>');
            });
        }
           
    });
});
/*
'<div class="w3-card w3-round w3-white" name="'+Audio.cod_audio+'"> <div class="w3-container"> <p>'+Audio.categoria+':</p> <p class="w3-center"><img src="'+Audio.imagem+'" class="w3-circle" style="height:200px;width:200px" alt="Avatar"></p> <h4 class="w3-center">'+Audio.nome_audio+'</h4> <audio id="'+Audio.cod_audio+'" value="'+Audio.nome_audio+'" controls><source src="'+Audio.audio+'" type="audio/'+Audio.tipo+'"></audio> <hr> <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>Descrição: '+Audio.descricao+'</p> <button id="btAds" onclick="selcAudio('+Audio.cod_audio+','+name+')">Adicionar</button></div> </div>'
'<div class="blocos" name="'+Audio.cod_audio+'" ><img src="'+Audio.imagem+'" height="42" width="42"><h1 class="nome">'+Audio.nome_audio+'</h1><audio id="'+Audio.cod_audio+'" value="'+Audio.nome_audio+'" controls><source src="'+Audio.audio+'" type="audio/'+Audio.tipo+'"></audio><h3 class=categoria>'+Audio.categoria+'</h3><h2 class="desc">'+Audio.descricao+'</h2><button id="btAds" onclick="selcAudio('+Audio.cod_audio+','+name+')">Adicionar</button></div>'
*/
