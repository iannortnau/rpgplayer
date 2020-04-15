<?php

//incluir audio
function Incluiraudio($link,$Nome,$Descricao,$Categoria,$Tipo,$Destinoimg,$Destinoaudio){
    $query = "INSERT INTO Audios (cod_audio,nome_audio,descricao,categoria,tipo,audio,imagem) 
          VALUES (NULL,'$Nome','$Descricao','$Categoria','$Tipo','$Destinoaudio','$Destinoimg');";
	mysqli_query($link, $query) or die(mysqli_error($link)); 
}



?>