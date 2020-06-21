<template>
    <div class="goods_list">
        <router-link class="goods_item" :to="'/home/goodsInfo' + item.id" tag="div">
        <!-- <div class="goods_item" v-for="item in goodsList" :key="item.id"> -->

            <img src="" alt="">
            <!-- <img :src="item.img_url" alt=""> -->

            <h3 class="title"></h3>
            <!-- <h3 class="title">{{ item.title }}</h3> -->

            <div class="info">
                <p class="price">
                    <span class="now">¥2199</span>
                    <!-- <span class="now">¥{{ item.sell_price }}</span> -->

                    <span class="old">¥2399</span>
                    <!-- <span class="old">¥{{ item.market_price }}</span> -->

                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩55件</span>
                    <!-- <span>剩{{ item.stock_quantity }}件</span> -->

                </p>
            </div>
        </router-link>

        <!-- 
        使用编程式导航，也就是js代码实现跳转的方式
        <div class="goods_item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h3 class="title">{{ item.title }}</h3>
            <div class="info">
                <p class="price">
                    <span class="now">¥{{ item.sell_price }}</span>
                    <span class="old">¥{{ item.market_price }}</span>

                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>

                </p>
            </div>
        </div>



         -->
        <mt-button type="danger" size="large" @click="getMore"></mt-button>
    </div>
</template>

<script>
//导入mint-ui的toast弹框模块
import { Toast } from 'mint-ui'

export default {
    data() {
        //在组件内部挂载私有数据
        return {
            pageIndex: 1,//分页的页数
            goodsList: []//存放商品列表的数组
        }
    },
    created() {
        //this.getGoodsList();
    },
    methods: {
        getGoodsList() {
            //获取商品列表
            /* this.$http.get('api/getgoods?pageindex=' + this.pageIndex).then(result => {
                if (result.body.status === 0) {
                    // this.goodsList = result.body.message;
                    this.goodsList = this.goodsList.concat(result.body.message);
                } else {
                    Toast('商品列表获取失败');
                }
            }) */
        },
        getMore() {
            this.pageIndex++;
            this.getGoodsList();
        },
        goDetail(id) {
            //使用js的形式进行路由导航
            //1. 最简便的传递字符串跳转
            this.$router.push('/home/goodsInfo/'+ id) 
            //2. 传递对象
            // this.$router.push({ path: '/home/goodsInfo/'+ id })
            //3. 传递命名的路由  使用path，params会被忽略，所以不同时使用
            // this.$router.push({ name: 'goodsInfo', params: { id: id }})
        }
    }
}
</script>

<style lang="scss" scoped>
    .goods_list {
        display: flex;
        flex-wrap: wrap;//flex布局中一行放不下，换行显示
        padding: 7px;
        justify-content: space-between;
        .goods_item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 9px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }
            .info {
                background-color: #eee;
                p {
                    margin: 0;
                    padding: 5px;
                }
                .price {
                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old {
                        text-decoration: line-through;//删除线
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>