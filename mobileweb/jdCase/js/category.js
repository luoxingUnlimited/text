window.onload = function () {
    /* 获取左侧栏 */
    var ct_cLeft = document.querySelector('.ct_cLeft');
    //获取左侧栏高度 便于确定内容能滑动的top区间
    var leftHeight = ct_cLeft.offsetHeight;
    /* 获取用来滑动的列表项 */
    var ulBox = ct_cLeft.children[0];
    //获取所有li
    var list = ulBox.children;
    //获取可滑动列表的高度
    ulBoxHeight = ulBox.offsetHeight;

    //设置静止状态下的最大top值
    var maxTop = 0;
    //设置静止状态下的最小top(是负值，因为是向上滑动 y为负值)
    var minTop = leftHeight - ulBoxHeight;
    //console.log(topMin);
    //设置滑动状态下的最大top
    var maxBounceTop = maxTop + 100;
    //滑动状态下的最小top
    var minBounceTop = minTop - 100;
    /* 实现垂直滑动 */
    /* 定义全局变量 */
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    var currentY = 0;//当前滑动距离
    //添加滑动事件
    ulBox.addEventListener('touchstart', function (event) {
        //获取到手指触屏开始的y值
        startY = event.targetTouches[0].clientY;
    });
    ulBox.addEventListener('touchmove', function (event) {
        //获取到手指滑动的y值
        moveY = event.targetTouches[0].clientY;
        //获取到手指滑动的距离
        distanceY = moveY - startY;
        //判断滑动时候是否超出当前滑动区间范围
        if ((currentY + distanceY) > maxBounceTop || (currentY + distanceY) < minBounceTop) {
            return;//超出范围就切断函数
        }
        //将之前可能添加的过渡效果清除
        ulBox.style.transition = 'none';
        //获得的距离就是ul的上偏移量
        ulBox.style.top = (distanceY + currentY) + 'px';
    });
    ulBox.addEventListener('touchend', function (event) {
        //松开手指后判断滑动距离是否在静止状态下的最大top与滑动状态的最大top之间
        if ((currentY + distanceY) > maxTop /* && (currentY + distanceY) < maxBounceTop */) {
            //此时就让滑动距离=静止状态下的最大top
            ulBox.style.transition = 'top 0.5s';
            ulBox.style.top = maxTop + 'px';
            currentY = maxTop;//重置当前滑动距离
        } else if ((currentY + distanceY) < minTop /* && (currentY + distanceY) > minBounceTop */) {
            //反之 滑动距离处于最小静止状态和最小滑动状态的top之间时
            //就让滑动距离=静止状态下的最小top
            ulBox.style.transition = 'top 0.5s';
            ulBox.style.top = minTop + 'px';
            currentY = minTop;
        }
        //记录当前滑动的距离 每次都应该加上前一次移动的距离
        currentY += distanceY;
    });

    //为每一个li添加index
    for (var i = 0; i < list.length; i++) {
        //动态为dom对象添加属性的方式比添加自定义属性的方式要好
        list[i].index = i;
    }

    //绑定移动端的tap事件
    itCast.tap(ulBox, 300, 6, function (event) {
        //console.log(111);
        //1.清除所有li的样式，再为当前li添加active
        for (var i = 0; i < list.length; i++) {
            //清除所有li的样式
            list[i].classList.remove('active'); 
        }
        //获取到当前被点击的li li也就是事件对象的目标元素，事件对象通过回调函数作为参数传过来
        //console.log(event.target.parentNode);
        var li = event.target.parentNode;
        li.classList.add('active');//添加active类样式
        //获取li元素的高度
        var liHeight = li.offsetHeight;
        //2.移动当前li在父元素的最上方，但不能超过静止状态的最小top
        //获取li的索引
        var index = li.index;
        //console.log(index);
        //开启过渡 设置垂直偏移
        ulBox.style.transition = 'top 0.5s';
        //判断偏移量是否小于了最小偏移量 
        if ((- index * liHeight) < minTop) {
            ulBox.style.top = minTop + 'px';
            currentY = minTop;
        } else {
            ulBox.style.top = (- index * liHeight) + 'px';
            currentY = - index * liHeight;
        }
        

        //切记不管何时只要时偏移量发生改变 就要重新赋值当前的移动距离currentY

    });
}