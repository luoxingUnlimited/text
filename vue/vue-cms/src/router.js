//将路由部分抽离出来

//导入路由模块
import VueRouter from 'vue-router'

//导入对应的路由组件模板
import homeContainer from './components/tab-bar/HomeContainer.vue'
import memberContainer from './components/tab-bar/MemberContainer.vue'
import shopCarContainer from './components/tab-bar/ShopCarContainer.vue'
import searchContainer from './components/tab-bar/SearchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
import goodsDesc from './components/goods/goodsDesc.vue'
import goodsComment from './components/goods/goodsComment.vue'

//创建路由对象
let routerObj = new VueRouter({
    routes: [{
        //更改默认路径
        path: '/', redirect: '/home'
    },{
        path: '/home', 
        component: homeContainer
        //children: [{path: 'newsList', component: newsList}]
        //newsList和主页是平级关系，要整个跳转到news页面，并不是在主页上切换，所以不是子路由
    },{
        path: '/member', component: memberContainer
    },{
        path: '/shop_car', component: shopCarContainer
    }, {
        path: '/search', component: searchContainer
    },{
        path: '/home/newsList', component: newsList
    },{
        path: '/home/newsInfo/:id', component: newsInfo
    },{
        path: '/home/photoList', component: photoList
    },{
        path: '/home/photoInfo/:id', component: photoInfo
    },{
        path: '/home/goodsList', component: goodsList
    },{
        path: '/home/goodsInfo/:id', component: goodsInfo, name: 'goodsInfo'
    },{
        path: './home/goodsDesc/:id', component: goodsDesc, name: 'goodsDesc'
    },{
        path: './home/goodsComment/:id', component: goodsComment, name: 'goodsComment'
    }],
    linkActiveClass: 'mui-active'
});

//将路由对象暴露导出
export default routerObj