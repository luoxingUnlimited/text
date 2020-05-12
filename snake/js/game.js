(function () {
    var that;//定义一个that记录游戏对象
    //使用自调用函数创建一个新的作用域，防止js文件之间的命名冲突
    function Game(map) {
        //创造一个game的构造函数
        this.map = map;
        this.food = new Food();
        this.snake = new Snake();
        that = this;//在调用构造函数创建对象的时候就会让that=this 会让that记录下这个游戏对象
    }
    Game.prototype.start = function () {
        //1.把食物和蛇对象渲染到地图上
        this.food.render(this.map);
        this.snake.render(this.map);
        //调用move方法改变了snake的xy的值，所以要重新渲染在页面上 所以调用一次就要渲染一次
        //测试
        //this.snake.move();
        //this.snake.render(this.map);

        //2.开始游戏的逻辑
        //2.1让蛇移动起来
        //2.4当蛇遇到边界的时候 游戏结束
        runSnake();
        //2.2通过键盘控制蛇移动的方向
        bindKey();
        //要注册键盘事件，通过键盘码keyCode获取上下左右对应的code
        //2.3当蛇遇到食物的时候 食物被蛇吃掉
        
    }

    //写一个私有的函数开始游戏的逻辑
    //让蛇移动起来
    function runSnake() {
        var timerId = setInterval(function () {
            //每隔200ms让蛇走一格
            //在定时器function中的this是指向window对象的
            //获取游戏对象中的蛇属性，并渲染在页面上
            that.snake.move(that.food, that.map);
            that.snake.render(that.map);

            //2.4当蛇遇到边界的时候 游戏结束
            //获取蛇头坐标
            var headX = that.snake.body[0].x;
            var headY = that.snake.body[0].y;
            //蛇头横向和纵向能够到达的最大距离
            var maxX = that.map.offsetWidth / that.snake.width;
            var maxY = that.map.offsetHeight / that.snake.height;
            if (headX < 0 || headX >= maxX) {
                alert('Game Over!');//弹框关掉后，蛇头会出去，是页面渲染蛇头的问题
                clearInterval(timerId);
            }
            if (headY < 0 || headY >= maxY) {
                alert('Game Over!');
                clearInterval(timerId);
            }
        }, 200);
    }

    //通过键盘控制蛇移动的方向
    function bindKey() {
        //注册键盘事件 文档上按下上下左右触发
        document.addEventListener('keydown', function (event) {
            event = event || window.event;
            //keyCode 左 37 上 38 右 39 下 40
            switch (event.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38: 
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
        }, false)//false为事件冒泡

    }
    //将Game构造函数暴露在外部
    window.Game = Game;
})();
//测试
var map = document.getElementById('map');
var game = new Game(map);
game.start();
//game.snake.move();
