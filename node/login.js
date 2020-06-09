//实现服务器登录验证功能

//引入模块
const http = require('http');
const querystring = require('querystring');
const url = require('url');
//引入封装的静态服务器
const ss = require('./static.js');

http.createServer((req, res) => {
    //启动静态资源处理
    if (req.url.startsWith('/view')) {
        ss.staticServer(req, res, __dirname);
    }
    //动态资源
    if (req.url.startsWith('/login')) {
        //get 请求
        if (req.method === 'GET') {
            /* let param = url.parse(req.url, true).query;
            if (param.username === 'admin' && param.password === '123') {
                res.end('get success');
            } else {
                res.end('get failure');
            } */
            res.end('get');
        }
        //post请求
        if (req.method === 'POST') {
            /* let pData = '';
            req.on('data', (chunk) => {
                pData += chunk;
            });
            req.on('end', () => {
                let obj = querystring.parse(pData);
                if (obj.username === 'admin' && obj.password === '123') {
                    res.end('post success');
                } else {
                    res.end('post failure');
                }
            }); */
            res.end('post');
        }
    }

}).listen(3000, () => {
    console.log('running...')
})