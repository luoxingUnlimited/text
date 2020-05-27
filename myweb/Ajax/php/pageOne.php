<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP基础语法</title>
    <script>
        //数组
        //var arr = [1, 2];
        //console.log(arr[0], arr[1]);
        //var arr1 = new Array(3, 4, 5);
        //console.log(arr1[0], arr1[1]);
        //二维数组
        var arr = [];
        arr[0] = [1, 2, 3];
        arr[1] = [4, 5, 6];
        arr[2] = [7, 8, 9];
        arr['color'] = 'red';//用字符串的形式，相当于给arr增加属性，并不是增加arr的项
        console.dir(arr);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                console.log('索引为：' + i + ',' + j + ' 的值为：' + arr[i][j]);
            }
        }
    </script>
</head>
<body>
    <h2>测试内容</h2>
    <div>
        <?php 
        /* //创建数组的方式 array()
            $arr = array(1, 2, 3, 4, 5);
            $arr1 = array('zs', 'ls');
            print_r($arr);
            //Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )
            echo '<br>';//换行
            print_r($arr1);
            //print_r()主要是用来调试，访问数组元素依然可以arr[索引]
            echo '<br>';
            echo $arr[4],$arr1[0];
            echo '<br>';
            $arr2 = array('username'=>'zs', 'age'=>'18');
            //以这种方式传入的数组，打印出来，索引就是传入的属性
            //Array ( [username] => zs [age] => 18 )
            print_r($arr2);
            echo '<br>';
            var_dump($arr2);//输出数组，主要是用来帮助调试 */
            //----------------------------------------------------------------------
            //二维数组
            $arr = array();
            $arr[0] = array(11, 22, 33);
            $arr[1] = array(44, 55, 66);
            $arr[2] = array(77, 88, 99);
            print_r($arr);
            //Array ( 
            //    [0] => Array ( [0] => 11 [1] => 22 [2] => 33 ) 
            //    [1] => Array ( [0] => 44 [1] => 55 [2] => 66 ) 
            //    [2] => Array ( [0] => 77 [1] => 88 [2] => 99 ) )
            echo '<br>';
            $arr1 = array(123);//字符串和数值可以共存 
            $arr1['color'] = array('apple' => 'red', 'orange' => 'orange', 'banana' => 'yellow');
            $arr1['shape'] = array('apple' => 'round', 'orange' => 'round', 'banana' => 'long');
            print_r($arr1);
            //Array ( 
            //    [0] => 123    
            //    [color] => Array ( [apple] => red [orange] => orange [banana] => yellow ) 
            //    [shape] => Array ( [apple] => round [orange] => round [banana] => long ) )
        ?>
    </div>
</body>
</html>