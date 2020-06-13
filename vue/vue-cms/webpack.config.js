
const path = require('path');
//-----先引入插件
const htmlWebpackPlugin = require('html-webpack-plugin');


//这个配置文件，起始是个js文件，通过node中的模块操作，向外暴露一个配置对象
module.exports = {
    //在配置文件中，需要手动指定入口和出口
            //入口， 表示webpack要打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    //出口
    output: {
        //指定打包好的文件要输出到哪个目录中
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js' //指定输出文件的名字
    },
    plugins: [
        //-----然后在此处new一个在内存中生成页面的对象
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//页面的模板路径
            filename: 'index.html'//内存中页面的名字
        })
    ],
    module: {
        //该节点用来用于配置所有第三方模块加载器
        rules: [
            //所有第三方文件的处理规则 loader可接收传参，等同于url？的传参
            //配置处理.css文件的第三方loader规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            //配置处理less文件的第三方loader规则
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            //配置处理scss文件的第三方loader规则
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            //配置处理css中图片url的第三方loader  limit值可以自定义，图片字节数小于这个值时，会进行base64编码，name参数固定写法，name是图片名字，ext是图片对应的后缀
            {test: /\.(png|jpg|gif|bmp|jpeg)$/,use: 'url-loader?limit=10240&name=[hash]-[name].[ext]&esModule=false'},
            //配置处理字体文件的url的第三方loader
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            //配置Babel 将高版本语法转换成低版本语法的第三方loader 排除node_modules目录之外的js文件
            //需要在根目录下创建.babelrc文件来配置Babel 配置安装过的babel插件和语法(必须是json格式)
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            //配置vue文件的第三方loader
            {test: /\.vue$/, use: 'vue-loader'}
        ]        
    }
}