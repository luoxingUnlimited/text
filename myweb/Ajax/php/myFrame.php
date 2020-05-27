<?php 
    $uName = $_POST['userName'];
    $pW = $_POST['password'];
    //if ($uName == 'admin' && $pW == '123456') {
    //    echo '登录成功';
    //} else {
    //    echo '请输入正确的用户名或密码';
    //}
    //直接操作子页面的js
    if ($uName == 'admin' && $pW == '123') {
?>  
    <script>
        parent.document.getElementById('info').innerText = '登录成功';
    </script>
<?php
    } else {
?>
    <script>
        parent.document.getElementById('info').innerText = '请输入正确的用户名和密码';
        parent.document.getElementById('info').style.color = 'red';
    </script>
<?php
    }
?>