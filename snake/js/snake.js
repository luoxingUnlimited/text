//自调用函数，开启新的作用域，避免命名冲突
(function () {
    var position = 'absolute';
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
        //把每一个蛇节渲染到地图上
        for (var i = 0, len = this.body.length; i < len; i++) {
            var object = this.body[i];
            //创建蛇头div
            var div = document.createElement('div');
            map.appendChild(div);
            //设置蛇头属性
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.position = position;
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
        }
    }

    //暴露构造函数给外部
    window.Snake = Snake;
})();
