window.onload = function () {
    /* 头部搜索块效果 */
    searchEffect();
    //倒计时效果
    timeBack();
    bannerEffect();
}
/* 头部js效果 */
function searchEffect() {
    /* 获取当前banner高度  获取屏幕滚动时banner滚出屏幕的距离*/
    /* 二者比例即为透明度 */
    var banner = document.querySelector('.jd_banner');
    var bannerHeight = banner.offsetHeight;
    var search = document.querySelector('.jd_search');
    window.onscroll = function () {
        /* banner滚出屏幕的高度 */
        var bannerY = document.documentElement.scrollTop || this.document.body.scrollTop;
        var opacity = bannerY / bannerHeight;
        if (opacity >= 1) {
            opacity = 1;
        }
        //console.log(bannerHeight);
        //console.log(bannerY);
        /* 设置样式 */
        search.style.backgroundColor = 'rgba(233, 35, 34, ' + opacity + ')';
    }
}
/* 倒计时效果 */
function timeBack() {
    //获取展示时间的span
    var time = document.querySelector('.jd_sk_time');
    var spans = time.querySelectorAll('span');
    //设置初始的倒计时
    var totalTime = 1 * 60 * 60 + 100;// 3700 秒为单位
    //设置定时器
    var timerId = setInterval(function () {
        totalTime--;//实现倒计时
        //判断倒计时时间是否完成
        if (totalTime < 0) {
            clearInterval(timerId);
            return;
        }
        //获得时分秒
        var hour = Math.floor(totalTime / 60 / 60);
        var minute = Math.floor(totalTime / 60 % 60);
        var second = Math.floor(totalTime % 60);
        //console.log(hour, minute, second);
        //将时间填充进span中
        spans[0].innerText = Math.floor(hour / 10);
        spans[1].innerText = Math.floor(hour % 10);
        spans[3].innerText = Math.floor(minute / 10);
        spans[4].innerText = Math.floor(minute % 10);
        spans[6].innerText = Math.floor(second / 10);
        spans[7].innerText = Math.floor(second % 10);
    }, 1000);
}
/* 轮播图 */
function bannerEffect() {
    /* 修改轮播图的页面结构 */
    //1.在第一张前面添加最后一张图
    //2.在最后一张图后面添加第一张图
    //获取轮播图结构
    var banner = document.querySelector('.jd_banner');
    //获取图片容器
    var imgBox = banner.querySelector('ul:first-of-type');
    //获取原始的第一张图片
    var first = imgBox.querySelector('li:first-of-type');
    //获取原始的最后一张图片
    var last = imgBox.querySelector('li:last-of-type');
    //在首尾分别插入这两张图片
    imgBox.appendChild(first.cloneNode(true));
    imgBox.insertBefore(last.cloneNode(true), imgBox.firstChild);

    /* 设置对应的样式 */
    //获取banner中li的数量
    var list = imgBox.children;
    var count = list.length;
    //获取到当前banner宽度
    var bannerWidth = banner.offsetWidth;
    //console.log(bannerWidth);
    //console.log(count);
    //设置图片盒子的宽度
    imgBox.style.width = count * bannerWidth + 'px';
    //console.log(imgBox.style.width);
    //设置图片盒子里的li的宽度
    for (var i = 0; i < list.length; i++) {
        list[i].style.width = bannerWidth + 'px';
    }

    /* 设置图片索引 */
    var index = 1;

    //设置图片盒子的偏移量 显示原始第一张图片
    //imgBox.style.position = 'relative';
    imgBox.style.left = - bannerWidth + 'px';

    /* 当屏幕发生改变时，重新计算宽度 覆盖以前的宽度 */
    window.onresize = function () {
        //设置图片盒子宽度
        bannerWidth = banner.offsetWidth;
        imgBox.style.width = count * bannerWidth + 'px';
        //设置盒子中每个li 的宽度
        for (var i = 0; i < list.length; i++) {
            list[i].style.width = bannerWidth + 'px';
        }
        //设置偏移量 让原始第一张图片显示在首页
        //imgBox.style.position = 'relative';直接设置在样式中
        imgBox.style.left = - index * bannerWidth + 'px';
    }

    /* 实现点标记 */
    //获取点标记盒子
    var indicatorBox = banner.querySelector('ul:last-of-type');
    var indicators = indicatorBox.children;
    function setIndicator(index) {
        //去掉列表中所有点标记的active样式
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove('active');
        }
        //为当前的图片对应的li元素添加样式
        indicators[index - 1].classList.add('active');
    }
    

    /* 实现自动轮播 */
    //封装定时器
    var timerId;
    function startTimer() {
        timerId = setInterval(function () {
            //索引自增 
            index++;
            //添加过渡效果
            imgBox.style.transition = 'left 1s ease-in-out';
            //设置偏移 
            imgBox.style.left = (- bannerWidth * index) + 'px';
            //判断是否是最后一张
            setTimeout(function () {//等一秒之后再执行，契合过渡的时间
                if (index === (count - 1)) {
                    //console.log(index);
                    index = 1;
                    imgBox.style.transition = 'none';
                    imgBox.style.left = (- bannerWidth * index) + 'px';
                }
            }, 1000);   
        }, 2000);
    }
    startTimer();
    

    /* 实现手动轮播  */
    var startX, moveX, distanceX;
    //当滑动轮播图的速度过快时，会导致页面变成白色，而没办法进入webkitTransitionEnd事件中
    //因为没办法完成一次完整的过渡效果
    //因此，可以设置个变量来标记当前过渡效果是否执行完毕
    var isEnd = true;//一开始没有过度效果，所以默认是已经完成一次完整给的过渡效果
    //为图片添加触摸事件
    imgBox.addEventListener('touchstart', function (event) {
        //清除定时器
        clearInterval(timerId);
        //获取到手指起始的x坐标
        //targetTouches是一个数组集合
        startX = event.targetTouches[0].clientX;
        //console.log(event.targetTouches[0].clientX);
    });
    //为图片添加滑动事件
    imgBox.addEventListener('touchmove', function (event) {
        if (isEnd) {
            //获取到手指滑动过程中的x坐标
            moveX = event.targetTouches[0].clientX;
            //计算手指滑动的距离 设置为图片的偏移量
            distanceX = moveX - startX;
            //为了保证效果正常 要在此处清除之前的过渡效果
            imgBox.style.transition = 'none';
            /* 偏移量是基于之前轮播图的偏移量而偏移的，并不是直接偏移 */
            imgBox.style.left = - index * bannerWidth + distanceX + 'px';
        }
        
    });
    //为图片添加触摸结束事件
    imgBox.addEventListener('touchend', function (event) {
        //只有松开手指 才能进行下一次的滑动
        isEnd = false;
        //获取当前滑动的距离， 判断距离是否超出范围
        if (Math.abs(distanceX) > 100) {
            //通过大于零还是小于零来判断方向 决定当前显示是上一张还是下一张
            if (distanceX > 0) {
                //往右滑动 当前显示上一张
                index--;
            } else {
                index++;
            }
            //翻页
            imgBox.style.transition = 'left 1s ease-in-out';
            imgBox.style.left = - index * bannerWidth + 'px';
        } else if (Math.abs(distanceX) > 0) {
            //回弹
            imgBox.style.transition = 'left 1s ease-in-out';
            imgBox.style.left = - index * bannerWidth + 'px';
        }
        //将每一次touchend之后的值都重置
        startX = 0;
        moveX = 0;
        distanceX = 0;
        
    });
    //当一个元素的过渡效果执行完毕后触发webkitTransitionEnd事件
    imgBox.addEventListener('webkitTransitionEnd', function () {
        //如果到了最后一张：count-1,就回到索引1 因为要跳转，所以要清除过渡，重新设置偏移量
        //如果到了第一张，就回到最后一张：count-2
        if (index === (count - 1)) {
            index = 1;
            //清除过渡
            imgBox.style.transition = 'none';
            //设置偏移
            imgBox.style.left = - index * bannerWidth + 'px';
            //console.log(222);
        } else if (index === 0) {
            index = count - 2;
            //清除过渡
            imgBox.style.transition = 'none';
            //设置偏移
            imgBox.style.left = - index * bannerWidth + 'px';
            //console.log(111);
        }
        //设置标记
        setIndicator(index);
        setTimeout(function () {
            isEnd = true;
            //清除定时器
            clearInterval(timerId);//防止内存中定时器过多
            //重新开启定时器
            startTimer();
        }, 500) 
    });
}