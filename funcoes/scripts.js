$(function(){
    //solicita e recebe os audios como json e os insere no html
    $.ajax({
        url: 'http://localhost/rpgplayer/requests/getsAudios.php',
        contentType: 'application/json',
        dataType:"json",


        success: function(response) {
            let tbodyEl = $('.divAudios');

            tbodyEl.html('');
            
            response.forEach(function(Audio) {
                var name = "'";
                name += Audio.nome_audio;
                name+="'";
                tbodyEl.append('<div class="blocos" name="'+Audio.cod_audio+'" ><img src="'+Audio.imagem+'" height="42" width="42"><h1 class="nome">'+Audio.nome_audio+'</h1><audio id="'+Audio.cod_audio+'" value="'+Audio.nome_audio+'" controls><source src="'+Audio.audio+'" type="audio/'+Audio.tipo+'"></audio><h3 class=categoria>'+Audio.categoria+'</h3><h2 class="desc">'+Audio.descricao+'</h2><button id="btAds" onclick="selcAudio('+Audio.cod_audio+','+name+')">Adicionar</button></div>');
            });
        }
           
    });
});

