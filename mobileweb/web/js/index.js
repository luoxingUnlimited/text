$(function () {
    //页面加载
    //初始化工具提示 (宝 北)
    $('[data-toggle="tooltip"]').tooltip();
    //监听屏幕的大小改变
    $(window).on('resize', function () {
        //获取当前屏幕宽度
        var width = $(this).width()
        //获取页面所有item项
        var items = $('.carousel-inner .item');
        //判断屏幕宽度
        if (width >= 768) {
            //此时就是非移动端
            //遍历，为每一个item添加子元素a  此时的图片应该作为背景图出现
            $(items).each(function (index, ele) {
                var item = $(this);
                //获取item自定义属性中的图片路径
                var imgSrc = item.data('largeImage');
                //console.log(imgSrc);
                //添加非移动端的子元素
                item.html('<a href="javascript:void(0);" style="background-image:url(' + imgSrc + ')" class="pcImg"></a>');
            });
        } else {
            //此时是移动端的屏幕
            //遍历 为item添加子元素
            $(items).each(function (index, ele) {
                var item = $(this);
                //获取小图路径
                var imgSrc = item.data('smallImage');
                //创建a链接
                var link = $('<a href="javascript:void(0);"></a>');
                //将img添加进a链接中
                link.append($('<img src="' + imgSrc + '" alt="..." class="mobileImg"></img>'));
                //然后将link放入item的html中
                item.html(link);
            });
        }
    }).trigger('resize');

    //添加移动端的滑动
    //获取轮播图 以及 轮播图片部分
    var carousel = $('.carousel');
    var carouselInner = $('.carousel-inner')[0];
    //定义手指开始触屏和触屏结束的X值
    var startX, endX;
    carouselInner.addEventListener('touchstart', function (event) {
        //获取到开始触屏的手指在屏幕的X值
        startX = event.targetTouches[0].clientX;
    });
    carouselInner.addEventListener('touchend', function (event) {
        //获取触屏结束的手指在屏幕的X值
        endX = event.changedTouches[0].clientX;
        //计算两位置差值 做出判断
        if (endX - startX > 0) {
            //上一张
            carousel.carousel('pre')
        } else if (endX - startX < 0) {
            //下一张
            carousel.carousel('next');
        }
    });

    /* 计算产品快导航项的原始宽度 */
    //获取导航的ul
    var ul = $('.wjs_product .nav-tabs');
    var list = ul.find('li');
    //定义总宽度
    var totalWidth = 0;
    list.each(function (index, ele) {
        totalWidth += $(this).innerWidth();
    });
    ul.width(totalWidth);
    //调用滑动插件
    var myScroll = new IScroll('.tabs_parent', {
        //设置水平滑动垂直不滑动  默认垂直滑动
        scrollX: true,
        scrollY: false
    });
});