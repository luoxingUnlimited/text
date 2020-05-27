<?php 
    /*
    省市县后台数据接口
    接口调用规则：
        参数1：flag，用来区分请求的是省市县的哪一级数据（1：省，2：市，3：县）
        参数2：选择省的时候就传递pTd，选择市的时候就传递cId
    */
    // include('./selectData.php');
    require('selectData.php');
    // 省市县数据来自selectData.php文件
    $province = $provinceJson;
    $city = $cityJson;
    $county = $countyJson;

    $flag = $_GET['flag'];
    // 省级数据
    if($flag == 1){
        echo json_encode($province);
    // 市级数据
    }else if($flag == 2){
        $pId = $_GET['pId'];
        $cityData = array();
        foreach ($city as $value) {
            if($value->id == $pId){
                // 直辖市
                array_push($cityData,$value);
                break;
            }else if($value->parent == $pId){
                // 非直辖市
                array_push($cityData,$value);
            }
        }
        echo json_encode($cityData);
    // 县级数据
    }else if($flag == 3){
        $cId = $_GET['cId'];
        $countyData = array();
        foreach ($county as $value) {
            if($value->parent == $cId){
                array_push($countyData,$value);
            }
        }
        echo json_encode($countyData);
    }
?>