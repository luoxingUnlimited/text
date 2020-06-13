//将路由部分抽离出来

//导入路由模块
import VueRouter from 'vue-router'

//导入对应的路由组件模板
import homeContainer from './components/tab-bar/HomeContainer.vue'
import memberContainer from './components/tab-bar/MemberContainer.vue'
import shopCarContainer from './components/tab-bar/ShopCarContainer.vue'
import searchContainer from './components/tab-bar/SearchContainer.vue'

//创建路由对象
let routerObj = new VueRouter({
    routes: [{
        //更改默认路径
        path: '/', redirect: '/home'
    },{
        path: '/home', component: homeContainer
    },{
        path: '/member', component: memberContainer
    },{
        path: '/shop_car', component: shopCarContainer
    }, {
        path: '/search', component: searchContainer
    }],
    linkActiveClass: 'mui-active'
});

//将路由对象暴露导出
export default routerObj