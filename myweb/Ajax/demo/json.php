<?php
    //写死的字符串
    //echo '{"userName":"zs", "age": 18}';
    //动态拼接的字符串
    //$uName = 'ls';
    //$age = '17';
    //echo '{"userName":'.$uName.',"age":'.$age.'}';
    //json_encode():将数组或对象转换成json形式的字符串
    //$arr = array(1, 2, 3, 4, 5);
    //$str = json_encode($arr);
    //echo $str;

    $arr1 = array("name1" => "Tom", "name2" => "Jerry", "name3" => "Spike");
    $str1 = json_encode($arr1);
    echo $str1;
?>