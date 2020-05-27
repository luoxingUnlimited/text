//简单封装ajax
function ajax(type, url, param, dataType, callback) {
    var type = type || 'get';
    var url = url || '#';
    var param = param || ''
    var dataType = dataType || 'text';
    var callback = callback || function (data) {
        console.log(data);
    };
    var xhr = new XMLHttpRequest();
    var data = null;
    if (type == 'get') {
        url += '?' + encodeURI(param);
    }
    xhr.open(type, url, true);
    if (type == 'post') {
        data = param;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = xhr.responseText;
                if (dataType == 'json') {
                    data = JSON.parse(data);
                }
                callback(data);
            }
        }
    }
}