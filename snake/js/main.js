//测试代码 代码执行的入口
(function () {
    //测试
    var map = document.getElementById('map');
    var game = new Game(map);
    game.start();
    //game.snake.move();
    //在执行代码 所以不需要暴露代码给外部
})();
