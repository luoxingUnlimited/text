//模拟jQuery中封装Ajax和jsonp
function ajax(obj) {
    //设置默认的对象内的参数值
    var defaults = {
        type: 'get',
        url: '#',
        data: {},
        dataType: 'json',
        async: true,
        jsonp: 'callback',
        success: function (data) {
            console.log(data);
        }
    }
    //接收传入的参数 
    for (var key in obj) {
        defaults[key] = obj[key];
    }
    //判断是传入jsonp 还是其他类型决定走哪条封装
    if (defaults.dataType == 'jsonp') {
        ajaxJsonp(defaults);
    } else {
        ajaxJson(defaults);
    }


    //json封装（ajax封装）
    function ajaxJson(defaults) {
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        var param = '';
        for (var attr in defaults.data) {
            param += attr + '=' + defaults.data[attr] + '&';
        }
        if (param) {
            param = param.substr(0, param.length - 1);
        }
        if (defaults.type == 'get') {
            defaults.url += '?' + encodeURI(param);
        }
        xhr.open(defaults.type, defaults.url, defaults.async);
        var content = null;
        if (defaults.type == 'post') {
            content = param;
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        }
        xhr.send(content);
        if (!defaults.async) {
            if (defaults.dataType == 'json') {
                return JSON.parse(xhr.responseText);
            } else {
                return xhr.responseText;
            }
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var data = xhr.responseText;

                    if(defaults.dataType == 'json'){
                        data = JSON.parse(data);
                    }
                    defaults.success(data);
                }
            }
        }
    }

    //jsonp封装 jsonp仅支持get请求
    function ajaxJsonp(defaults) {
        //设置默认回调函数名称
        var cbName = 'jQuery' + ('1.12.1' + Math.random()).replace(/\D/g, '') + '_' + (new DataCue().getTime());
        if (defaults.jsonpCallback) {
            cbName = defaults.jsonpCallback;
        }
        //回调函数的调用方式：服务器响应内容调用
        //相当于向window中添加了一个方法 方法名称是变量cbName的值
        window[cbName] = function (data) {
            defaults.success(data);//data是实参
        }
        var param = '';
        for (var attr in defaults.data) {
            param += '&' + attr + '=' + defaults[attr];
        }
        var script = document.createElement('script');
        script.src = defaults.url + '?' + defaults.jsonp + '=' + cbName + param;//数据拼接
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
    }
}