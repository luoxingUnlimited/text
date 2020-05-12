//将动过过程封装成函数：
function animate(element, target, interval) {
    //调用定时器之前，先清空定时器 防止有多个定时器执行，导致点击次数增多，盒子移速加快
    if (element.timerId) {
        clearInterval(element.timerId);
        element.timerId = null;
    }
    //设置定时器，每隔一定时间重复做某件事
    element.timerId = setInterval(function() {
        var step = 10;
        var current = element.offsetLeft;

        //从400-800，current400 < target800 执行动画
        //从800-400，current800 > target400 关掉了定时器，元素的位置直接定位到了target 所以不执行动画
        //让其依然执行动画，返回的时候其位置依次减少step值
        if (current > target) {
            //判断当前位置是否大于目标位置，大于则一次减少step值，也就是将其变成负值
            step = - Math.abs(step);//绝对值
        }
        //停掉定时器的判断 current>=target,是只从小到大的动画
        //从到到小的动画判断 current-target 可以利用其差值与step的值作比较
        if (Math.abs(current - target) < Math.abs(step)) {
            //移动的距离小于step时，就关掉定时器，不用再增加box的left值来改变位置
            clearInterval(element.timerId);
            element.style.left = target + 'px';
            return;//记得定时器中关掉定时器后要退出函数
        }

        //让box在页面中的位置不断+step值
        current += step;
        element.style.left = current + 'px';
    }, interval);
}