//项目入口文件

 
//导入js模块 jquery  （需要接收成员）
import $ from 'jquery'
//等同： const $ = require('jquery')

//导入样式表 （不需要接收成员）
import './css/index.css'
import './css/index.less'
import './css/index.scss'


//1.安装vue 2.导入vue模块
import Vue from '../node_modules/vue/dist/vue'
//4.导入模板对象
import app from './App.vue'

//导入全部mint ui 和相应的样式
//import MintUi from 'mint-ui'
//import 'mint-ui/lib/style.css'//可省略node_modules目录

//将MintUi手动安装到Vue
//Vue.use(MintUi);

//按需导入mint-ui组件
import {Button} from 'mint-ui'
//使用Vue.component注册按钮组件
// Vue.component('myButton', Button);//自定义名称
Vue.component(Button.name, Button)//官方名称




//导入模板对象
// import Account from './component/Account.vue'
// import GoodsList from './component/GoodsList.vue'
// import login from './component-children/login.vue'
// import register from './component-children/register.vue'

//导入路由模块
import VueRouter from 'vue-router'

//手动安装路由
Vue.use(VueRouter);

//导入路由对象
import routerObj from './js/router'

//创建路由对象
/* let routerObj = new VueRouter({
    routes: [{//配置路由匹配规则
        path: '/Account', 
        component: Account, 
        children: [
            {path: 'login', component: login},
            {path: 'register', component: register}
        ],
    },{
        path: '/GoodsList',
        component: GoodsList
    }]
    
}); */

//webpack默认只能打包js类型文件，无法处理非js类型文件
//需要手动安装第三方loader（加载器）才能处理非js类型文件 

$(function () {
    $('li:odd').css('backgroundColor', '#6f9');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'f69';
    });
});

//3.在.vue文件中书写组件模板（template script style三部分组成）
//5.创建vue的实例
let vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: function (createElements) {
        return createElements(app);//6.将组件替代app控制区域，渲染在页面
    },
    //将路由挂载在实例上
    router: routerObj

})
