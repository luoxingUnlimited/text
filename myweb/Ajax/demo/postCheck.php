<?php 
    $uName = $_POST['userName'];
    //echo $uName;
    $pw = $_POST['password'];
    //echo $pw;

    if($uName == 'admin' && $pw == '123'){
        echo 1;
    }else{
        echo $uName;
    }
?>