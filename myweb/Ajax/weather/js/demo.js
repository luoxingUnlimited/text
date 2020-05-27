//6d15512a309261f3cd461a03617bd9e6
//https://way.jd.com/jisuapi/weather?city=安顺&cityid=111&citycode=101260301&appkey=您申请的APPKEY
$(function () {
    //页面加载
    getData();
    $('#search').on('keydown', function (event) {
        //键盘按下事件 enter 13
        //console.log(event.keyCode);
        if (event.keyCode === 13) {
            //获取到输入的城市
            var city = $('#search').val();
            //console.log(city);
        }
    });
    function getData(city) {
        //设置默认城市天气
        var city = city || '北京';
        $.ajax({
            type:'get',
            url:'https://way.jd.com/jisuapi/weather?',
            data: {"city":city, "appkey":"6d15512a309261f3cd461a03617bd9e6"},
            dataType:'jsonp',
            jsonp:'callback',
            success:function (data) {
                //console.log(data);
                var tag = '<ul>';
                tag += '<li><h3>城市：'+ data.result.city +'</h3></li><li><h3>时间：'+ data.result.date +'<h3></li><li><h3>星期：'+ data.result.week +'</h3></li><li><h3>天气：'+ data.result.weather+'</h3></li><li><h3>城市：'+ data.result.city +'</h3></li><li><h3>风力和风向：</h3><p>'+data.result.windpower + data.result.winddirect + '</p></li><li>';
                $.each(data.result, function(i, e) {
                    tag += '<li><ul><li><h3>'+ e.iname +'</h3></li><li>'+ e.ivalue +'</li><li>'+ e.detail+'</li></ul></li>';
                });
                tag += '</ul>';
                $('#info').html(tag);
                $('#info').find('li').hover(function () {
                    $(this).css('backgroundColor', '#f0f0f0');
                }, function () {
                    $(this).css('backgroundColor', '');
                });
            }
            //error:function () {
            //    console.log(111);
            //}
        });
    }
});