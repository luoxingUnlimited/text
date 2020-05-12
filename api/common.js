//处理innerText和textContent的兼容问题  获取内部文本
function getInnerText(element) {
    if (typeof element.innerText === 'string') {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
//设置innerText之间的内容 兼容写法
function setInnerText(element, content) {
    if (typeof element.innerText === 'string') {
        return element.innerText = content;
    } else {
        return element.textContent = content;
    }
}

//通过id获取元素
function my$(id) {
    return document.getElementById(id);
}

//获取元素的第一个子元素的兼容性写法
function getFirstElementChild(element) {
    var node,
        nodes = element.childNodes,
        i = 0;
    while (node = nodes[i++]) {
    //赋值过程，i++,先获取i，再+1；++i，先+1，再获取+1后i的值
        if (node.nodeType === 1) {
            //元素节点 nodeType = 1;
            return node;
        }
    }
    return null;
}
//获取元素的最后一个子元素的兼容写法
function getLastElementChild(element) {
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === 1) {
            return nodes[i];
        }
    }
    return null;
}

//获取元素的下一个兄弟元素 兼容写法
function getNextElementSibling(element) {
    var ele = element;
    while (ele = ele.nextSibling) {
        if (ele.nodeType === 1) {
            return ele;
        }
    }
    return null;
}
//获取元素的上一个兄弟元素 兼容写法
function getPreviousElementSibling(element) {
    var ele = element;
    while (ele = ele.previousSibling) {
        if (ele.nodeType === 1) {
            return ele;
        }
    }
    return null;
}

//注册事件 兼容写法
function addEventListener(element, eventName, fn) {
    //事件源，事件名称，事件处理函数
    if (element.addEventListener) {
        element.addEventListener(eventName, fn);//第三个参数默认false？？？
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, fn);
    } else {
        //事件源.onclick = function
        element['on' + eventName] = fn;
    }
}
//移除事件 兼容写法
function removeEventListener(element, eventName, fn) {
    if (element.removeEventListener) {
        element.removeEventListener(eventName, fn);
    } else if (element.detachEvent) {
        element.detachEvent('on' + eventName, fn);
    } else {
        element['on' + eventName] = null;
    }
}

//获取页面滚动出去的距离 兼容写法  (该函数会返回一个对象)
function getScroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

//获取pageX和pageY  兼容写法  (该函数会返回一个对象形式)
function getPage(event) {//记得把event事件对象传进来
    var pageX = event.pageX || event.clientX + getScroll().scrollLeft;
    var pageY = event.pageY || event.clientY + getScroll().scrollTop;
    return {
        pageX: pageX,
        pageY: pageY
    };
}

//间隔 interval 写一个函数 里面进行时间差的计算
function getInterval (start, end) {
    //求输入两个日期的毫秒值
    var interval = end - start;
    var day,
        hour,
        minute,
        second;
    //相差的总秒数=毫秒值/1000
    interval /= 1000;
    //相差的总天数=毫秒值/1000/60/60/24
    day = parseInt(interval / 60 / 60 / 24);
    //Math.round()四舍五入取整容易出现问题 用parseInt()比较好
    //相差的小时数=毫秒值/1000/60/60%24（除以24除尽的变成天数，除不尽的余数就是小时数）
    hour = parseInt(interval / 1000 / 60 /60 % 24);
    //相差的分钟数=毫秒值/1000/60%60
    minute = parseInt(interval / 1000 / 60 % 60);
    //相差的秒数=毫秒值/1000%60
    second = parseInt(interval / 1000 % 60);
    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    };
}