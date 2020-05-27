<?php 
    $code = $_POST['code'];
    //$code = $_GET['code'];
    $arr = array();
    $arr['sg'] = array("bookName" => "三国演义", "author" => "罗贯中", "desc" => "一个杀伐纷争的年代");
    $arr['shz'] = array("bookName" => "水浒传", "author" => "施耐庵", "desc" => "108位好汉的故事");
    $arr['hlm'] = array("bookName" => "红楼梦", "author" => "曹雪芹", "desc" => "一个封建王朝的缩影");
    $arr['xyj'] = array("bookName" => "西游记", "author" => "吴承恩", "desc" => "佛教与道教之争");  
    if (array_key_exists($code, $arr) == 1) {//判断数组中是否有某个键 有就返回1
        //获得一本书
        $book = $arr[$code];
        //将数组中的对象转化成json字符串的形式
        echo json_encode($book);
    } else {
        echo '{"flag":0}';
    }
    //echo '{"userName":"zs", "age":18}';
?>