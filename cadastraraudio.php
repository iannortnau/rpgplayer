<?php
	require 'includes/conexao.php';
	require 'includes/funcoes.php';
?>
<!DOCTYPE html>
<html>
<title>NotIFica</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="css/mainCss.css">

<body>

<header>
    <h1 class="header">RPPGPLAYER</h1>
</header>

<main>
	<form method="POST" enctype="multipart/form-data" action="cadastraraudio.php" name="incluir" class="w3-container w3-card-4 w3-text-blue w3-margin corMandante2">
        <h2 class="w3-center">Registrar audio</h2>
        
        <div class="w3-row w3-section">
        <div class="w3-col" style="width:50px"><i class="w3-xxlarge fas fa-user"></i></div>
            <div class="w3-rest">
            <input class="w3-input w3-border" name="nome" placeholder="Nome" required>
            </div>
        </div>

        <div class="w3-row w3-section">
        <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-envelope-o"></i></div>
            <div class="w3-rest">
            <input class="w3-input w3-border" name="descricao" placeholder="Descrição" required>
            </div>
        </div>
        <br>
        <div class="w3-row w3-section">
        <div class="w3-col" style="width:50px"><i class="w3-xxlarge fab fa-d-and-d"></i></div>
            <div class="w3-rest">
            <input type="radio" id="contactChoice1" name="categoria" value="animal">
            <label for="contactChoice1">Animal</label>

            <input type="radio" id="contactChoice2" name="categoria" value="monstro">
            <label for="contactChoice2">Monstro</label>

            <input type="radio" id="contactChoice3" name="categoria" value="arma branca">
            <label for="contactChoice3">Arma Branca</label>

            <input type="radio" id="contactChoice4" name="categoria" value="arma de fogo">
            <label for="contactChoice4">Arma de Fogo</label>

            <input type="radio" id="contactChoice5" name="categoria" value="outros">
            <label for="contactChoice5">Outros</label>
        </div>
        <br>

        <div class="w3-row w3-section">
        <div class="w3-col" style="width:50px"><i class="w3-xxlarge fas fa-image"></i></div>
            <div class="w3-rest">
            <input class="w3-input w3-border" name="arquivo" type="file" placeholder="Imagem de descrição" required>
            </div>
        </div>

        <div class="w3-row w3-section">
        <div class="w3-col" style="width:50px"><i class="w3-xxlarge fas fa-music"></i></div>
            <div class="w3-rest">
            <input class="w3-input w3-border" name="audio" type="file" placeholder="Arquivo de audio" required>
            </div>
        </div>


        <p class="w3-center">
        <button class="w3-button w3-section w3-blue w3-ripple" name="Enviar" value="Enviar">Enviar</button>
        </p>

        <?php
            if(!empty($_POST["Enviar"])){
        
                $Nome = $_POST["nome"];
                $Descricao = $_POST["descricao"];
                $Categoria = $_POST["categoria"];
                $Tipo;
        
                if($_FILES['arquivo']['name']){
        
                    $arquivo_tmp = $_FILES['arquivo']['tmp_name'];
                    $nome = $_FILES['arquivo']['name'];
                    
        
                    // Pega a extensao
                    $extensao = strrchr($nome, '.');
        
                    // Converte a extensao para mimusculo
                    $extensao = strtolower($extensao);
        
                    // Somente imagens, .jpg;.jpeg;.gif;.png
                    // Aqui eu enfilero as extesões permitidas e separo por ';'
                    // Isso server apenas para eu poder pesquisar dentro desta String
                    if(strstr('.jpg;.jpeg;.gif;.png', $extensao))
                    {
                        // Cria um nome único para esta imagem
                        // Evita que duplique as imagens no servidor.
                        $novoNome = md5(microtime()). $extensao;
                        
                        // Concatena a pasta com o nome
                        $destinoimg = 'img/' . $novoNome; 
                        
                        // tenta mover o arquivo para o destino
                        @move_uploaded_file( $arquivo_tmp, $destinoimg);
                        
                    }
                    else
                        echo "Você poderá enviar apenas arquivos \"*.jpg;*.jpeg;*.gif;*.png\"<br />";
                    }
                else{
                    echo "Você não enviou nenhum arquivo!";
                }

                if($_FILES['audio']['name']){
        
                    $arquivo_tmp = $_FILES['audio']['tmp_name'];
                    $nome = $_FILES['audio']['name'];
                    
        
                    // Pega a extensao
                    $extensao = strrchr($nome, '.');
        
                    // Converte a extensao para mimusculo
                    $extensao = strtolower($extensao);
        
                    // Somente imagens, .jpg;.jpeg;.gif;.png
                    // Aqui eu enfilero as extesões permitidas e separo por ';'
                    // Isso server apenas para eu poder pesquisar dentro desta String
                    if(strstr('.mp3;.wav;.ogg;', $extensao))
                    {
                        // Cria um nome único para esta imagem
                        // Evita que duplique as imagens no servidor.
                        $novoNome = md5(microtime()). $extensao;
                        if($extensao == ".mp3"){
                            $Tipo = "mpeg";
                        }
                        if($extensao == ".wav"){
                            $Tipo = "wav";
                        }
                        if($extensao == ".ogg"){
                            $Tipo = "ogg";
                        }
                        

                        
                        // Concatena a pasta com o nome
                        $destinoaudio = 'audios/' . $novoNome; 
                        
                        // tenta mover o arquivo para o destino
                        @move_uploaded_file( $arquivo_tmp, $destinoaudio);
                        
                    }
                    else
                        echo "Você poderá enviar apenas arquivos \"*.jpg;*.jpeg;*.gif;*.png\"<br />";
                    }
                else{
                    echo "Você não enviou nenhum arquivo!";
                }
        
        
            
                //inclui o audio e recarrega a pagina
                Incluiraudio($link, $Nome, $Descricao, $Categoria, $Tipo, $destinoimg, $destinoaudio);
                header("Location:cadastraraudio.php");
                
            }

            

        ?>

	</form>
</main>

</body>
</html>
