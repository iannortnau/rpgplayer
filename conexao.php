<?php

 $link = mysqli_connect('localhost', 'root', '', 'rpgplayer');
    mysqli_query($link, "SET NAMES 'utf8'");
    mysqli_query($link, 'SET character_set_connection=utf8');
    mysqli_query($link, 'SET character_set_client=utf8');
    mysqli_query($link, 'SET character_set_results=utf8');

?>
