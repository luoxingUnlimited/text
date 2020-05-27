<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP基础语法-get</title>
</head>
<body>
    <div>测试get获取数据</div>
    <div>
        <?php
            $f = $_GET['flag'];
            //echo '<span>'.$f.'</span><br>';
            if ($f == 1) {//获取到的数据不是全等 是字符串形式的
                echo '得到数据';
            } else {
                echo '参数错误';
            }
        ?>
    </div>
</body>
</html>