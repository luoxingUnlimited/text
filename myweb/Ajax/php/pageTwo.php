<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP基础语法</title> 
    <script>
        var num = 123;
        console.log(typeof num);
        var str = 'abc';
        console.log(typeof str);
        var flag = true;
        console.log(typeof flag);
        var arr = [];
        console.log(typeof arr);
        console.log(Object.prototype.toString.call(arr));
    </script>
</head>
<body>
    <?php
        $num = 123;
        $float = 11.256;
        $str = 'hello';
        $flag = true;
        $v = NULL;
        $arr = array(1);
        echo gettype($num).'<br>';
        echo gettype($float).'<br>';
        echo gettype($str).'<br>';
        echo gettype($flag).'<br>';
        echo $v.'<br>';//gettype($v).'<br>';输出null的方式
        echo gettype($arr).'<br>';
        //gettype()内置函数 用来获取数据类型

        //遍历数组的两种方式 count()内置函数 用来获取数组长度
        $arr = array(1, 2, 3, 4, 5);
        for ($i = 0; $i < count($arr); $i++) {
            echo "$arr[$i]<br>";
        }
        foreach($arr as $value) {
            echo '---'.$value.'<br>';
        }
    ?>
</body>
</html>