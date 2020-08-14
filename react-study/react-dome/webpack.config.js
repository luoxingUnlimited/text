// 导入path模块
const path = require('path')
// 导入在内存中生成html的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
// 导出配置对象
module.exports = {
    // 需要被打包的文件
    entry: path.join(__dirname, './src/main.js'),
    // 文件打包好之后要输出到的路径
    output: {
        path: path.join(__dirname, './dist'),
        // 文件名称
        filename: 'bundle.js'
    },
    // 插件配置处
    plugins: [
        new htmlWebpackPlugin({
            // 指定生成页面的模板
            template: path.join(__dirname, './src/index.html'),
            // 生成页面的名称
            filename: 'index.html'
        })
    ],
    // 配置第三方文件模块
    module: {
        // 配置匹配第三方loader的处理规则
        rules: [
            // 正则匹配
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // `css-loader?modules&localIdentName=[name]_[local]-[hash:8]`启用css-loader的模块化
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[name]_[local]-[hash:5]'
                    } 
                }
            }, {
                loader:'sass-loader'
            }] },
            // 处理低版本ES语法的第三方loader `exclude`排除匹配到该规则的项
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=5000&name=[hash:5]-[name].[ext]&esModule=false'
               /*  use: [{
                    loader: 'url-loader'
                },{
                    options: {
                        limit: 5000,
                        name: '[hash:5]-[name].[ext]',
                        esModule: false
                    }
                }] */
            }
        ]
    }

}