//将路由部分抽离出来


//导入模板对象
import Account from '../component/Account.vue'
import GoodsList from '../component/GoodsList.vue'
import login from '../component-children/login.vue'
import register from '../component-children/register.vue'


//导入路由模块
import VueRouter from 'vue-router'

//创建路由对象
let routerObj = new VueRouter({
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
    
});

//将路由对象暴露导出
export default routerObj