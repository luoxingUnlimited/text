<template>
    <div class="shopCar_container">
        <!-- 商品列表区域 -->
        <div class="goods_list">
            <div class="mui-card">
                <!-- <div class="mui-card" v-for="(item, i) in goodsList" :key="item.id"> -->
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
						<!-- <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" 
                        @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch> -->

                        <img src="" alt="">
                        <!-- <img :src="item.thumb_path" alt=""> -->

                        <div class="info">
                            <h3>标题</h3>
                            <!-- <h3>{{ item.title }}</h3> -->

                            <p>
                                <span class="price">¥2199</span>
                                <!-- <span class="price">¥{{ item.sell_price}}</span> -->

                                <numbox></numbox>
                                <!-- <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox> -->

                                <a href="##" @click.prevent="remove(item.id)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <!-- 结算区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner settlement">
					<div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span>0</span>件，总价<span>¥0</span></p>
                        <!-- <p>已勾选商品<span>{{ $store.getters.getGoodsCountAndAmount.count }}</span>件，
                        总价<span>¥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p> -->

                    </div>
                    <mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import numbox from '../sub-components/shopCar-numbox.vue'
//导入mint-ui的toast弹框模块
import { Toast } from 'mint-ui'

export default {
    data() {
        return {
            goodsList: []//购物车中所有商品的数据
        }
    },
    created() {
        //this.getGoodsList();
    },
    methods: {
        getGoodsList() {
            //1.获取到store中所有商品id 然后拼接成逗号分隔的字符串
            let idArr = [];
            this.$store.state.car.forEach(iten => idArr.push(item.id));
            //如果购物车内没有商品则直接跳出方法
            if (idArr.length <= 0) {
                return;
            }
            //获取购物车商品列表idArr.join(',')
            /* this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result => {
                if (result.body.status ===0) {
                    this.goodsList = result.body.message;
                } else {
                    Toast('获取商品列表失败')
                }
            }) */
        },
        remove(id, index) {
            //点击删除，把商品从store中根据传递的id删除，把当前组件goodsList中，对应要删除的商品 使用index，也删除
            this.goodsList.aplice(index, 1);
            this.$store.commit('removeFormCar', id);
        },
        selectedChanged(id, val) {
            //每当点击开关，把开关的最新状态同步到 store 中
            this.$store.commit('updateGoodsSelected', {id, selected: val});
        } 
    },
    components: {
        numbox: numbox
    }
}
</script>
<style lang="scss" scoped>
    .shopCar_container {
        background-color: #eee;
        overflow: hidden;
        .goods_list {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }
            img {
                width: 60px;
                height: 60px;
            }
            h3 {
                font-size: 14px;
            }
            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
               .price {
                   color: red;
                   font-weight: 700;
               }
            }
        }
        .settlement {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
                span {
                    color: red;
                }
            }
        }
    }
</style>