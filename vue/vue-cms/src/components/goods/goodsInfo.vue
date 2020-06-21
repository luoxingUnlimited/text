<template>
    <div class="goodsInfo_container">
        <!-- 购物车小球 -->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :carouselList="carouselList" :isFull="false"></swiper>
				</div>
			</div>
		</div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品的名称</div>
			<!-- <div class="mui-card-header">{{ goodsInfo.title }}</div> -->

			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
                        市场价： <del>¥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">¥2199</span>
                        <!-- 市场价： <del>¥{{ goodsInfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">¥{{ goodsInfo.sell_price }}</span> -->
                    </p>
                    <p>购买数量：<numbox @getCount="getSelectedCount" :max="goodsInfo.stock_quantity"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
				</div>
			</div>
		</div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：</p>
					<!-- <p>商品货号：{{ goodsInfo.goods_no}}</p> -->
                    <p>库存情况：</p>
                    <!-- <p>库存情况：{{ goodsInfo.stock_quantity }}件</p> -->
                    <p>上架时间：</p>
                    <!-- <p>上架时间：{{ goodsInfo.add_time | dateFormat }}</p> -->
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type="primary" size="small" plain @click="goDesc(id)">图文详情</mt-button>
                <mt-button type="danger" size="small" plain @click="geComment(id)">商品评论</mt-button>
            </div>
		</div>
    </div>
</template>

<script>
//导入mint-ui的toast弹框模块
import { Toast } from 'mint-ui'
//导入轮播图组件
import swiper from '../sub-components/swiper.vue'
//导入数字输入框组件
import numbox from '../sub-components/goodsInfo-numbox.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,// 将路由参数对象中的id挂载在data，方便后期调用
            carouselList: [],//轮播图数据
            goodsInfo: {},//获取到的商品信息
            ballFlag: false,//控制购物车小球隐藏与显示的标识符
            selectedCount: 1 //保存用户选中的商品数量，默认用户买一件
        }
    },
    created() {
        //this.getCarousel();
        //this.getGoodsInfo();
    },
    methods: {
        getCarousel() {
            /* this.$http.get('api/getthumimages/' + this.id).then(resulet => {
                if (result.body.status === 0) {
                    //循环轮播图数组的每一项，为item添加img属性，因为轮播图组件中，只认识item.img，不认识item.src    
                    result.body.message.forEach(item => {
                        item.img = item.src;
                    });
                    this.carouselList = result.body.message;
                } else {
                    Toast('获取图片数据失败')
                }
            }) */
        },
        getGoodsInfo() {
            //获取商品信息
            /* this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                if (result.body.status === 0) {
                    this.goodsInfo = result.body.message[0];
                } else {
                    Toast('获取商品信息失败')
                }
            }) */
        },
        goDesc(id) {
            //点击，使用编程式导航跳转到图文介绍页面
            this.$router.push({name: 'goodsDesc', params: {id} });
        },
        goComment(id) {
            //点击，使用编程式导航跳转到评论页面
            this.$router.push({name: 'goodsComment', params: {id} })
        },
        addToShopCar() {
            //添加到购物车
            this.ballFlag = !this.ballFlag;
            let goodsInfo = {//要保存在store中car数组里的商品信息对象
                id: this.id,
                count: this.selectedCount,
                price: this.goodsInfo.sell_price,
                selected: true
            };
            //在组件中调用mutations中的方法来添加或修改数据
            this.$store.commit("addToCar", goodsInfo)
        },
        beforeEnter(el) {
            el.style.transform = 'translate(0, 0)';
        },
        enter(el, done) {
            el.offsetWidth;

            //利用徽标的横纵坐标和小球横纵坐标的差值，即为小球要移动的距离
            //domObject.getBoundingClientRect() 获取dom对象距离页面最顶部和最左侧的距离，包含left,top,right,bottom四个属性，分别表示元素各边与页面上左的距离
            //元素.getBoundingClientRect().left 获取元素左边距离页面上侧和左侧的距离

            //获取小球在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            //获取徽标在页面中的位置
            const badgePosition = document.getElementById('badge').getBoundingClientRect();

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${ xDist }px, ${ yDist }px)`;//ES6的模板字符串
            el.style.transition = 'all 1s ease';
            done();
        },
        afterEnter(el) {
            this.ballFlag = !this.ballFlag; 
        },
        getSelectedCount(count) {
            //当子组件把选中的数量传递给父组件的时候，将选中的值保存在data上
            this.selectedCount = count;
        }
    },
    components: {
        swiper: swiper,
        numbox: numbox
    }
}
</script>

<style lang="scss" scoped>
    .goodsInfo_container {
        background-color: #eee;
        overflow: hidden;
        .now_price {
            color: red;
            font-size: 16px;
            font-weight: 700;
        }
        .mui-card-footer {
            display: block;
            button {
                margin: 15px 0;
            }
        }
        .ball {
            width: 15px;
            height: 15px;
            border: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top: 390px;
            left: 146px;
        }
    }   
</style>