//自调用函数
(function () {
    var Tools = {
        //只需要创建一个工具对象，所以不用构造函数创建对象
        //生成随机数的方法
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    //因为外部需要访问，所以要将这个工具暴露给外部
    window.Tools = Tools;
})();
