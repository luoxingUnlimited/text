//封装静态服务器方法
//引入核心模块

const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');

//exports 导出模块 此处导出staticServer方法
//在其他文件中导入此方法就可以使用

exports.staticServer = (req, res, root) => {
    //传入请求信息 响应信息和root根路径参数
    //通过路径读取文件
    fs.readFile(path.join(root, req.url), (err, fileContent) => {
        //判断
        if (err) {
            //没有找到该文件
            res.writeHead(404, {//设置响应头信息，防止中文乱码
                'Content-Type':'text/plain;charset=UTF-8'
            });
            res.end('页面已走丢...')
        } else {
            //设置默认文件后缀
            let dType = 'text/html';
            //获取文件后缀
            let ext = path.extname(req.url);
            //判断在mime文件中是否有该后缀属性，是的话就替换默认值
            if (mime[ext]) {
                dType = mime[ext];
            }
            //判断是否是文本类型，是的话就添加编码设置
            if (dType.startsWith === 'text') {
                dType += ';charset=UTF-8';
            }
            //设置响应头信息
            res.writeHead(200, {
                'Content-Type':dType
            });
            //完成响应 响应文件内容
            res.end(fileContent);
        }
    })/* .listen(3000, () => {//监听端口
        console.log('running...');//告知服务器启动成功
    }); */
}