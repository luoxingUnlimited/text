$(function () {
    //页面加载
    //页面加载一定时间后执行动画
    setTimeout(function () {
        //给p1的父元素添加类属性
        $('.section1').addClass('comeIn');
    }, 1000);
    //书写fullPage的入口函数
    $('#fullPage').fullpage({
        navigation: true,//显示侧边导航
        loopBottom: true,//从最底部滚回顶部
        //一滚动就触发的回调函数：  
        onLeave: function (index, nextIndex, direction) {
            //从第一屏走到第二屏时
            if (nextIndex != 1) {
                //如果下一屏不是第一屏,就让背景逆时针旋转60°
                $('#bg').addClass('rotate');
            } else {
                $('#bg').removeClass('rotate');
            }
            //进入第二屏的时候
            if (nextIndex === 2) {
                //jquery里面的animate方法不支持transform
                //jquery 可以通过css和transition搭配可以实现类似animate的效果
                $('.p2').css('transform','translate(-50%, -50%) translateZ(0) scale(1)');
                //将p2的css属性中的transform复原即可
            } else {
                //离开第二屏的时候 变更大离开屏幕
                $('.p2').css('transform', 'translate(-50%, -50%) translateZ(2000px) scale(1)')
            }
            /* 进入第三屏 */
            if (nextIndex === 3) {
                $('.p3').css('transform','translateZ(-50px) rotateX(30deg)');
                $('.title3').css('transform','translateZ(0) rotateX(0)');
            } 
            /* 进入第四屏 */
            if (nextIndex === 4) {
                //第三屏的动画消失
                $('.p3').css('transform','translateZ(-200px) rotateX(-45deg) translateX(2000px)');
                $('.title3').css('transform','translateZ(1200px) rotateX(-60deg)');
                //第四屏的动画执行
                $('.p4').css('transform','translate(-50%, -50%) translateZ(0) rotateY(0deg)');
            }
            
        }
    });
});