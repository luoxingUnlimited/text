//入口文件

//导入文件
import Vue from 'vue'

//导入mui样式
import './lib/mui/css/mui.css'
//完整导入mint-ui
//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'

//按需导入mint-ui中的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入App这个组件
import app from './App.vue'

let vm = new Vue({
    el: '#app',
    render: function(c) {
        return c(app);
    }
})