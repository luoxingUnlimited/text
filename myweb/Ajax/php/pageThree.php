<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP基础语法</title>
    <script>
        //js中的自定义函数
        function fn(element) {
            return element;
        }
        var ret = fn('hello');
        console.log(ret);
    </script>
</head>
<body>
    <?php
        //php中的自定义函数 依然有函数的预解析和函数声明提升
        //函数名不区分大小写
        $a = fun('hi Tom');
        echo $a.'<br>';
        function fun($info) {
            return $info;
        }
        $ret = fun('hi');
        echo $ret.'<br>';
    ?>
</body>
</html>