//封装移动端的tap（点击）事件
var itCast = {
    tap: function (dom, time, distance, callback) {
        //传入dom元素 不同元素的处理方式不一样，传入回调函数（函数内是处理方式）
        if (!dom || typeof dom != 'object') {
            //判断是否传入dom dom是否是个对象
            return;
        }
        var startTime, startX, startY, endX, endY;
        //给time distance 设置初始值
        var time = time || 300;//ms
        var distance = distance || 6;//px
        //开始触摸
        dom.addEventListener('touchstart', function (event) {
            //判断是否是一根手指进行操作 不是一根手指在操作就断开函数
            if (event.targetTouches.length > 1) {
                return;
            }
            //获取到开始触摸的时间
            startTime = Date.now();
            //获取当前手指在屏幕上的坐标
            startX = event.targetTouches[0].clientX;
            startY = event.targetTouches[0].clientY;
        });
        //触摸结束
        dom.addEventListener('touchend', function (event) {
            //判断是否是一根手指进行操作 不是一根手指在操作就断开函数
            if (event.targetTouches.length > 1) {
                return;
            }
            //判断时间差异
            if ((Date.now() - startTime) > time) {
                //手指离开的时间和开始触摸的时间差值大于了某个范围，就认为是长按，断开函数
                return;
            }
            //获取到手指离开时的坐标
            endX = event.changedTouches[0].clientX;
            endY = event.changedTouches[0].clientY;
            //当离开时的坐标和开始的坐标的差值 超过某个范围就视为滑动操作 反之妈祖条件 视为触摸操作
            if (Math.abs(endX - startX) < distance && Math.abs(endY - startY) < distance) {
                //判断触摸事件是否需要执行后续操作，需要就调用回调函数
                //console.log('tap事件');
                //判断是否有回调函数传入
                callback && callback(event);
            }
        });

    }
}