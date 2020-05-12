(function () {
    //使用自调用函数创建一个新的作用域，防止js文件之间的命名冲突
    function Game(map) {
        //创造一个game的构造函数
        this.map = map;
        this.food = new Food();
        this.snake = new Snake();
    }
    Game.prototype.start = function () {
        //把食物和蛇对象渲染到地图上
        this.food.render(this.map);
        this.snake.render(this.map);
    }
    //将Game构造函数暴露在外部
    window.Game = Game;
})();
/* //测试
var map = document.getElementById('map');
var game = new Game(map);
game.start(); */