<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>成绩</title>
</head>
<body>
    <div>
        <?php
        //服务器端渲染 
            //模拟数据
            $arr = array();
            $arr['150'] = array('userName' => '张三', 'Chinese' => '130', 'Math' => '124', 'English' => '144', 'Comprehensive' => '278');
            $arr['151'] = array('userName' => '李四', 'Chinese' => '99', 'Math' => '149', 'English' => '88', 'Comprehensive' => '296');
            $arr['152'] = array('userName' => '王五', 'Chinese' => '146', 'Math' => '100', 'English' => '147', 'Comprehensive' => '295');
            $arr['153'] = array('userName' => '赵六', 'Chinese' => '96', 'Math' => '148', 'English' => '149', 'Comprehensive' => '270');
            //print_r($arr);
            //$_POST = json_decode(file_get_contents('php://input'), true);
            //echo $_POST["number"];
            $code = $_POST['code'];
            //echo $number;
            //$score = $arr[$code];
            //echo "<ul><li>姓名：$score[userName]</li><li>语文：$score[Chinese]</li><li>数学：$score[Math]</li><li>综合：$score[Comprehensive]</li></ul>";
            if ($code == 'admin') {
                //判断是否以管理员的方式访问，是的话遍历全部数据，拿到所有学生的成绩
                foreach ($arr as $value) {
                    echo "<ul><li>姓名：$value[userName]</li><li>语文：$value[Chinese]</li><li>数学：$value[Math]</li><li>综合：$value[Comprehensive]</li></ul>";
                }
            } else {
                //不是的话，就对应相应的学号，找到指定的学生成绩输出
                $score = $arr[$code];
                echo "<ul><li>姓名：$score[userName]</li><li>语文：$score[Chinese]</li><li>数学：$score[Math]</li><li>综合：$score[Comprehensive]</li></ul>";
            }
            

        ?>
    </div>
</body>
</html>