<?php
    //POST请求
    //是根据name属性获取表单数据
    $uName = $_POST['userName'];
    $pW = $_POST['passWord'];
    $reg2 = '[^\d{6,12}$]';
    $reg1 = '[\u4e00-\u9fa5]';
    //设置服务器响应的文件类型
    header('Content-Type:text/plain;charset=UTF-8');
    //if ($uName == 'admin' && $pW == '123456') {
    //    echo '登录成功';
    //} else {
    //    echo '请输入正确的用户名或密码';
    //}
    if (preg_match($reg1, $uName) && preg_match($reg2, $pW)) {
        echo '登录成功';
    } else {
        echo '请输入正确的用户名或密码';
    }