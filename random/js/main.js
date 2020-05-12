//入口文件 协调box和tools
//生成10个方块，随机生成颜色 
//获取容器
var container = document.getElementById('container');
//定义一个数组接收盒子，方便后续随机把盒子放进容器中
var array = [];
//利用循环，随机生成10个不同颜色的盒子
for (var i = 0; i < 10; i++) {
    var r = Tools.getRandom(0, 255);
    var g = Tools.getRandom(0, 255);
    var b = Tools.getRandom(0, 255);
    
    //创建盒子对象
    var box = new Box(container, {
        backgroundColor: 'rgb(' + r + ', ' + g + ', ' + b + ')'
    });
    array.push(box);//将盒子放进数组中
}
//console.log(array);
//设置定时器，在页面自动随机生成盒子
setInterval(randomBox, 500);
//将定时器中的函数写在外部，并调用一次，是为了让页面加载完成就是随机盒子位置，不用等定时器的500ms之后再随机；
randomBox();
function randomBox() {
    for (var i = 0; i < array.length; i++) {
        var box = array[i];//数组中的每一项都是盒子
        box.random();//调用盒子的随机位置方法，把盒子随机生成到容器中
        //console.log(box);
    }
}
//console.log(array);