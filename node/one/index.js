/* 入口文件 */

const path = require('path');
const fs = require('fs');
const md = require('markdown-it')();
let tplPath = path.join(__dirname, 'tpl.html');
let mdPath = path.join(__dirname, 'demo.md');
let targetPath = path.join(__dirname, 'demo.html');
/* var md = require('markdown-it')();
var result = md.render('## markdown-it rulezz!');
console.log(result); */

//读取markdown文件
fs.readFile(mdPath, 'UTF-8', (err, data) => {
    if (err) return;
    //对文件内容进行转换 转换成html
    let result = md.render(data);
    //读取模板文件
    fs.readFile(tplPath, 'UTF-8', (err, tplData) => {
        if(err) return;
        //将模板内容中的占位符用md文件转换的内容替换
        tplData = tplData.replace('<%content%>', result);
        //将内容写入目标文件
        fs.writeFile(targetPath, tplData, (err) => {
            if(err) return;
            console.log('转换完成');
        });
    });
});

/* //删除文件
fs.unlink(path.join(__dirname, 'demo.html'), (err) => {
    if(err) return;
    console.log('删除成功');
}); */