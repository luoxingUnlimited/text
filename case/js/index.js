//获取到公告和促销的a标签
//当鼠标经过的时候，让a标签下的红线执行动画
//当鼠标经过公告的时候，显示公告里的内容，鼠标经过促销的时候，显示促销里的内容
var news = document.getElementById('news');
var newsT = news.children[0];
var newsContainer = news.children[1];
var flag = document.getElementById('flag');
//给a标签绑定鼠标经过事件
//var linkCX = newsT.children[0];
//var linkGG = newsT.children[1];
//linkCX.onmouseover = linkMouseover;
//linkGG.onmouseover = linkMouseover;
for (var i = 0; i < newsT.children.length; i++) {
    var link = newsT.children[i];
    link.onmouseover = linkMouseover;
    //设置自定义属性
    link.setAttribute('index', i);
}
function linkMouseover() {
    //让红线执行动画，移动到a链接所在的当前位置上
    var offsetLeft = this.offsetLeft;
    animate(flag, offsetLeft - 3, 30);
    //显示对应的详细内容，先让所有的详细内容隐藏
    for (var i = 0, len = newsContainer.children.length; i < len; i++) {
        //将数组的长度先获取，可提高代码执行的性能
        var div = newsContainer.children[i];
        if (div.className.indexOf('hide') === -1) {
            //判断是否有hide这个类样式，=-1说明没有
            div.className = 'news-b hide';//没有就添加给他，让他隐藏
        }
        //获取自定义属性，让这个属性对应的a链接 对应的盒子内容显示出来
        var index = parseInt(this.getAttribute('index')) ;
        newsContainer.children[index].className = 'news-b show';
    }
}