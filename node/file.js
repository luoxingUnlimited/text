//文件操作
//引入文件模块
const fs = require('fs');
const path = require('path'); 
/* fs.stat('test.js', (err, stats) => {
    if (err) return;
    if (stats.isFile()) {
        console.log('文件');
    } else if (stats.isDirectory()) {
        console.log('目录');
    }
    console.log(stats);
}); */
/* let ret = fs.statSync('test.js');
console.log(ret); */

//写文件
/* let str = path.join(__dirname, 'test.js');
fs.writeFile(str, 'hi', 'utf-8', (err) => {
    if (!err) {
        console.log('文件写入成功');
    }
}); */
//创建目录
/* fs.mkdir(path.join(__dirname, 'one'), (err) => {
    console.log(err);
}); */
//读取目录
/* fs.readdir(__dirname, (err, files) => {
    if (err) return;
    files.forEach((item, index) => {
        //遍历判断文件状态
        fs.stat(path.join(__dirname, item), (err, stats) => {
            if (stats.isFile()) {
                console.log(item + '文件');
            } else if (stats.isDirectory()) {
                console.log(item + '目录');
            }
        })
    });
}); */
//删除目录
fs.rmdir(path.join(__dirname, 'one'), (err) => {
    console.log(err);
});