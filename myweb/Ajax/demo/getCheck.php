<?php
    $uName = $_GET['userName'];
    $pW = $_GET['password'];

    if ($uName == 'admin' && $pW == '123') {
        echo '1';
    } else {
        echo '2';
    }
?>
