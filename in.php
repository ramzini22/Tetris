<?php
    $file = fopen('winners.txt', 'r+');
    $text ="";
    for($i=1;$i<6;$i++){
        if($i==$_POST['place'])
            $text.=$_POST['nickname']." ".$_POST['ochki']." ".date("d.m.Y")." ".$_POST['password']." \n";
        else{
            $mytext = fgets($file, 999);
            $text.=$mytext;
        }
    }
    fclose($file);
    $file = fopen('winners.txt', 'w+');
    fwrite($file, $text);    
    fclose($file);

?>