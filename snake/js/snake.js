//自调用函数，开启新的作用域，避免命名冲突
(function () {
    var position = 'absolute';
    //定义一个数组，记录之前创建的蛇的每一个蛇节
    var elements = [];
    //创建snake的构造函数
    function Snake(options) {
        options = options || {};//防止没有传参导致代码出错
        //蛇的大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        //蛇 移动的方向，默认right
        this.direction = options.direction || 'right';
        //蛇的身体
        this.body = [
            {x: 3, y: 2, color: 'red'},
            {x: 2, y: 2, color: 'blue'},
            {x: 1, y: 2, color: 'blue'}
        ];
    }
    Snake.prototype.render = function (map) {
        //先删除之前创建的蛇 再调用这个方法把蛇渲染在页面上
        remove();
        //把每一个蛇节渲染到地图上
        for (var i = 0, len = this.body.length; i < len; i++) {
            var object = this.body[i];
            //创建蛇头div
            var div = document.createElement('div');
            map.appendChild(div);

            //记录当前蛇节
            elements.push(div);

            //设置蛇头属性
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.position = position;
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
        }
    }
    //删除蛇节的方法函数
    function remove() {
        //删除数组中的每一项。从后往前能够完全删除，从前往后可能删不干净，因为删除一项之后索引会重置
        for (var i = elements.length - 1; i >= 0; i--) {
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素
            elements.splice(i, 1);
        }
    }

    //控制蛇移动的方法
    Snake.prototype.move = function (food, map) {
        //控制蛇的身体移动（当前蛇节移动到上一个蛇节的位置处）
        for (var i = this.body.length - 1; i > 0; i--) {
            //从最大的蛇节开始循环 不取蛇头
            //当前蛇节移动到上一个蛇节的位置
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //控制蛇头的移动
        //判断蛇移动的方向
        var head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }

        //判断蛇头是否和食物重合
        //把食物和地图当参数传进来 需要什么参数没办法获取的时候，就当参数传进来
        //蛇头坐标
        var headX = head.x * this.width;
        var headY = head.y * this.height; 
        if (headX === food.x && headY === food.y) {
            //蛇头与食物重合之后，让蛇节增加1，让页面重新渲染食物
            //获取蛇的最后一节，然后添加进蛇body中
            var last = this.body[this.body.length - 1];
            //在body里增加一个蛇身位置，然后将last的xy赋值给他
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            food.render(map);
        }
    }
    //暴露构造函数给外部
    window.Snake = Snake;
})();
