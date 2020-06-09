//业务模块


const path = require('path');
const fs = require('fs');
//加载数据
const data = require('./data.json');

//自动生成图书编号（自增）
let maxBookCode = () => {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id);
    });
    return Math.max.apply(null, arr);//返回数组的最大值
}

//将内存数据写入文件 回到主页面
let writeDataToFile = (res) => {
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if(err) {
            res.send('server error');
        }
        res.redirect('/');//跳入主页面
    })
}



//展示主页 渲染主页面
exports.showIndex = (req, res) => {//导出去的函数
    res.render('index', {list: data});//渲染数据
};

//跳转到添加图书页面
exports.toAddBook = (req, res) => {
    res.render('addBook', {});
}

//添加图书保存数据
exports.addBook = (req, res) => {
    //获取表单数据
    let info = req.body;
    let book = {};
    for(let key in info) {
        book[key] = info[key];
    }
    book.id = maxBookCode() + 1;
    data.push(book);
    //把内存中的数据写入文件
    writeDataToFile(res);
    /* fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if(err) {
            res.send('server error');
        }
        //文件写入成功 跳转到主页面.因为主页面是'/'
        res.redirect('/');
    }); */
}

//跳转到修改图书页面
exports.toEditBook = (req, res) => {
    let id = req.query.id;//拿到id，在数据中找到id对应的数据
    //console.log(id);
    let book = {};
    data.forEach((item) => {
        if (id == item.id) {
            book = item;
            return;
        }
    });
    res.render('editBook', book);
}


//编辑图书 更新数据
exports.editBook = (req, res) => {
    //得到所有表单数据
    let info = req.body;
    data.forEach((item) => {
        if(info.id == item.id) {
            for(let key in info) {
                item[key] = info[key];
            }
            return;
        }
    });
    //然后把数据写入数据文件中  将其转化成JSON格式的字符串形式 成功之后重新跳转到主页面
    writeDataToFile(res);
    /* fs.writeFile(path.join(__dirname, 'data.json'),JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.send('server error');
        }
        res.redirect('/');//重新跳转到主页面
    }) */
}

//删除图书信息
exports.deleteBook = (req, res) => {
    let id = req.query.id;
    data.forEach((item, index) => {
        if (id == item.id) {
            //删除该数组中的一项数据
            data.splice(index, 1);
        }
        return;
    });
    //然后把数据写入数据文件中  将其转化成JSON格式的字符串形式 成功之后重新跳转到主页面
    writeDataToFile(res);
    /* fs.writeFile(path.join(__dirname, 'data.json'),JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.send('server error');
        }
        res.redirect('/');//重新跳转到主页面
    }); */
}
    