<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP页面</title>
    <script>
        //js中的变量声明 （var） 字符串拼接（+进行拼接）
        //js中的单双引号无异，除了json中（json中的键值必须用双引号包裹，否则报错）
        var num = 123;
        var Num = 456;
        console.log('num为：' + num);
        console.log(Num);
        var json = '{"username":"zs", "age":"18"}';//json字符串
        var obj = JSON.parse(json);//转换成json对象
        console.dir(obj);
    </script>
</head>
<body>
    <h2>welcome to PHP page!</h2>
    <?php
        echo '<div>hello world!</div>';
        //php中的变量声明（$），单双引号（双引号识别变量，单引号不识别），字符串拼接（.进行拼接）
        $num = 1;
        $num1 = 2;
        echo '<div>num为：'.$num.'</div>';
        echo "<div>num1为：$num1</div>";  
    ?>
</body>
</html>