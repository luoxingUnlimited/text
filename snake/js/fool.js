(function () {
    var position = 'absolute';
    //记录上一次创建的食物，为删除做准备
    var elements = [];
    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || 'green';
    }
    
    
    
    //写一个方法将食物动态显示在地图上
    Food.prototype.render = function (map) {
        //在调用该方法之前 要先把地图上的食物删掉
        remove();
        //随机设置x和y的值
        this.x = Tools.getRandom(0, (map.offsetWidth / this.width) - 1) * this.width;
        this.y = Tools.getRandom(0, (map.offsetHeight / this.height) - 1) * this.height;
        //动态创建食物div
        var div = document.createElement('div');
        map.appendChild(div);//父容器接收
        //记录进数组
        elements.push(div);
        //设置食物样式
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
        div.style.position = position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
    }
    function remove() {
        //将数组中的元素删除，将页面上的食物div删除
        for (var i = elements.length - 1; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1);//从第i项，也就是当前项开始删，删除一项
        }
    }
    //将自调用函数中的构造函数暴露给外部
    window.Food = Food; 
})();//自调用函数，避免js文件多了之后命名冲突
