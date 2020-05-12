//创建方块对象
//因为方块对象不止一个，所以用构造函数的方式创建对象
//对象内要存储方块大小 位置 颜色
function Box(parent, options) {
    //因为要传进来的参数比较多，所以传对象进来
    options = options || {};//防止忘记传参发生错误
    //设置对象的属性
    this.backgroundColor = options.backgroundColor || '#f69';
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;

    this.div = document.createElement('div');
    //将div添加给父元素
    parent.appendChild(this.div);
    
    //让父盒子能够在外部访问，将他变成属性
    this.parent = parent;
    this.init();//要调用方法才能实现初始化
}
//在页面创建方块 在外部创建div最终无法生成在页面是为什么，只能生成一个。因为Box对象中没有创建
//所以采用将创建div添加为属性的方式比较合适，这样外部也能访问，内部也能创建
//var div = document.createElement('div');
//初始化div方块的样式

Box.prototype.init = function () {
    var div = this.div;
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.position = 'absolute';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
}
//让盒子在随机位置上生成
//给原型对象增加一个随机数的方法
Box.prototype.random = function () {
    //最小的位置为0，总共能放的方块个数= 父容器宽度/方块宽度
    //随机生成前面有几个方块*方块宽度 就是方块的坐标
    var x = Tools.getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width;
    var y = Tools.getRandom(0, this.parent.offsetHeight / this.height - 1) * this.height;
    this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';
}
