//模拟jQuery封装Ajax方法
function ajax(obj) {
    //设置默认的对象内的参数值
    var defaults = {//defaults 默认值
        type: 'get',//请求方式
        url: '#',//请求地址
        data: {},//请求地址内的参数
        dataType: 'json',//返回的数据的类型
        async: true,//同步或异步标志位
        success: function (data) {//回调函数
            console.log(data);
            console.dir(data);
        }
    }
    //接收传入的参数 
    for (var key in obj) {
        defaults[key] = obj[key];
    }
    //创建XMLHttpRequest对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //准备发送
    var param = '';
    for (var attr in defaults.data) {//拼接字符串成'属性=值&属性=值&属性=值...'的形式
        param += attr + '=' + defaults.data[attr] + '&';
    }
    if (param) {
        param = param.substr(0, param.length - 1);//截取字符串长度，去掉最后一项'&'
    }
    if (defaults.type == 'get') {
        //get请求
        defaults.url += '?' + encodeURI(param);//将参数拼接到url中，encodeURI()防止中文乱码
    }
    xhr.open(defaults.type, defaults.url, defaults.async);
    //执行发送动作
    var content = null;
    if (defaults.type == 'post') {
        content = param;
        //切记书写请求头信息
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }
    xhr.send(content);
    //判断同步/异步
    if (!defaults.async) {
        //同步直接输出数据
        if (defaults.dataType == 'json') {
            return JSON.parse(xhr.responseText);//response 响应
        } else {
            return xhr.responseText;
        }
    }
    //指定回调函数 异步  readyState 就绪状态  status 状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                
                if(defaults.dataType == 'json'){
                    data = JSON.parse(data);
                    //console.dir(data);
                }
                defaults.success(data);

            }
        }
    }
}