//入口文件

//导入文件
import Vue from 'vue'

//配置vuex的步骤
//3.1 运行 npm i vuex -S
//3.2 导入包
import Vuex from 'vuex'
//3.3 注册到Vue上
Vue.use(Vuex);

//刚打开页面的时候，会调用main.js 在被调用的时候，就让car获取本地存储的数据，没有数据就设置为空数组，再将数据放在store的car中
const car = JSON.parse(localStorage.getItem('car') || '[]');

//3.4 new Vuex.Store() 实例，得到数据仓储对象
const store = new Vuex.Store({
    state: {
        //类似data 用来存储数据
        //组件中，获取state中数据的方法： this.$store.state.state中定义的数据名
        car: car//将购物车中的商品数据存储在这个数组中
        //在该数组中存储商品对象，对应的有商品id，要购买的数量count， 商品单价price，商品的状态，是否被选中selected:true
    },
    mutations: {
        //类似methods 用来定义方法
        //组件中，调用mutations中方法的方式： this.$store.commit('mutations中定义的方法名', 按需传入唯一参数)
        addToCar(state, goodsInfo) {
            //点击加入购物车，将商品信息，保存到store中的car上
            //如果购物车中有对应的商品，更新商品数据即可，如果没有就添加商品信息
            let flag = false;//假设购物车中没有对应的商品
            state.car.some(item => {
                if (item.id === goodsInfo.id) {
                    item.count += parseInt(goodsInfo.count);
                    flag = true;
                    return turn;
                }
            });
            //如果循环完毕，flag依然是false，则将商品对象添加进去
            if (!flag) {
                state.car.push(goodsInfo);
            }

            //将更新好的car 数组存储在本地的localStorage中，以便刷新不会被清空内存
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsInfo(state, goodsInfo) {
            state.car.some(item => {
                if (item.id === goodsInfo.id) {
                    item.count = parseInt(goodsInfo.count);
                    return true;
                }
            })
            //将最新的数据保存到本地存储
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        removeFormCar(state, id) {
            //根据id，从store中的购物车中删除对应的那条商品数据
            state.car.some((item, i) => {
                if (item.id === id) {
                    state.car.splice(i, 1);
                    return turn;
                }
            })
            //将删除完毕之后的购物车最新的数据保存到本地存储
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id === info.id) {
                    item.selected = info.selected;
                }
            })
            //把更新的购物车数据状态存储到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: {
        //类似过滤器 也类似computer计算属性
        //组件中，获取getters中，包装过的数据： this.$store.getters.'getters中定义的方法名'
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        },
        getGoodsCount(state) {
            var obj = {};
            state.car.forEach(item => {
                //将每一条商品的id作为键，每一条商品的数量作为值传入一个新对象中
                obj[item.id] = item.count;
            });
            return obj;
        },
        getGoodsSelected(state) {
            var obj = {};
            state.car.forEach(item => {
                //商品对象中的id为键，selected选中状态为值的新对象
                obj[item.id] = item.selected;
            })
            return obj;
        },
        getGoodsCountAndAmount(state) {
            var obj = {
                count: 0,//勾选的数量
                amount: 0//勾选的总件
            };
            state.car.forEach(item => {
                if (item.selected) {
                    obj.count += item.count;
                    obj.amount += item.price * item.count;
                }
            })
            return obj;
        }
    }
})

//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 将路由注册到Vue 安装路由模块
Vue.use(VueRouter);

// 导入时间插件
import moment, { parseTwoDigitYear } from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2 安装vue-resource
Vue.use(VueResource);
//设置请求根路径
Vue.http.options.root = 'http://vue.stydyit.io'
//全局设置 post 请求时表单提交数据的格式
Vue.http.options.emulateJSON = true;



//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//完整导入mint-ui
//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'

//按需导入mint-ui中的组件
/* import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload); */
//完整导入，记得导入样式 按需导入lazyload，懒加载的图标无法显示出来
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

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
    router: routerObj,
    //3.5 将 vuex 创建的 store 对象挂载在vm实例上，只要挂载在vm上，就是全局的，任何组件都可以利用store来存取数据
    store: store 
})