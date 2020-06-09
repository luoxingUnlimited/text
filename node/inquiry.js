//动态网站开发
//实现成绩查询功能

//引入核心模块
const http = require('http');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const scoreData = require('./score.json');

//创建服务器
http.createServer((req, res) => {
    //查询成绩的入口地址 /query
    if (req.url.startsWith('/query') && req.method === 'GET') {
        //请求的路径和请求的方式
        fs.readFile(path.join(__dirname, 'view/index.tpl'), 'UTF-8', (err, content) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type':'text/plain;charset=UTF-8'
                });
                res.end('服务器错误，请与管理员联系');
            }
            res.end(content);
        });
    } else if (req.url.startsWith('/score') && req.method === 'POST') {
        //获取成绩的结果 /score
        let pData = '';
        req.on('data', (chunk) => {
            pData += chunk;
        });
        req.on('end', () => {
            let obj = querystring.parse(pData);
            let result = scoreData[obj.code];
            fs.readFile(path.join(__dirname, 'view/result.tpl'), 'UTF-8', (err, content) => {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type':'text/plain;charset=UTF-8'
                    });
                    res.end('服务器错误，请与管理员联系');
                }
                //返回内容之前要进行数据的渲染
                content = content.replace('<%chinese%>', result.chinese);
                content = content.replace('<%math%>', result.math);
                content = content.replace('<%english%>', result.english);
                content = content.replace('<%summary%>', result.summary);
                res.end(content);
            })
        });
    }  
}).listen(3000, () => {
    //listen 指定端口
    console.log('running...')
});