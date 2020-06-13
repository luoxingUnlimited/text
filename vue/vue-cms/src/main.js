//入口文件

//导入文件
import Vue from 'vue'

//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 将路由注册到Vue 安装路由模块
Vue.use(VueRouter);

//2.1导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);


//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//完整导入mint-ui
//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'

//按需导入mint-ui中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//1.3 导入自己的router.js 模块
import routerObj from './router'


//导入App这个组件
import app from './App.vue'

let vm = new Vue({
    el: '#app',
    render: function(c) {
        return c(app);
    },
    //1.4 将路由对象挂载在Vue的实例中
    router: routerObj
})