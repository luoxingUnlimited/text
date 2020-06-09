//路由模块

//引入模块
const express = require('express');
const router = express.Router();
//引入页面
const server = require('./service.js');


//路由处理
//渲染主页
router.get('/', server.showIndex);

//添加图书 (跳转到添加图书的页面)
router.get('/toAddBook', server.toAddBook);
//添加图书(提交表单)
router.post('/addBook', server.addBook);
//修改图书(跳转到修改图书页面)
router.get('/toEditBook', server.toEditBook);
//编辑之后提交表单
router.post('/editBook', server.editBook);
//删除图书
router.get('/deleteBook', server.deleteBook);

//导出router
module.exports = router;