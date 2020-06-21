<template>
    <div>
        <!-- 轮播图区 -->
        <swiper :carouselList="carouselList" :isFull="true"></swiper>
        <!-- 轮播图区域封装成单独的组件 -->
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in carouselList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe> -->
        <!-- 六宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
	                <img src="../../images/menu1.png" alt="">
	                <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoList">
	                <img src="../../images/menu2.png" alt="">
	                <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodsList">
	                <img src="../../images/menu3.png" alt="">
	                <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	            <img src="../../images/menu4.png" alt="">
	            <div class="mui-media-body">留言反馈</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	            <img src="../../images/menu5.png" alt="">
	            <div class="mui-media-body">视频专区</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	            <img src="../../images/menu6.png" alt="">
	            <div class="mui-media-body">联系我们</div></a></li>
	    </ul> 
        <h3>homeContainer</h3>
    </div>
</template>
<script>
    //引入mint-ui 中的弹框组件
    import { Toast } from 'mint-ui'
    //导入轮播图组件
    import swiper from '../sub-components/swiper.vue'
    //书写业务逻辑
    export default {
        data() {
            return {
                carouselList: [] //用于保存轮播图的数组，
            }
        },
        created() {
            //在数据和方法都初始化完成的生命周期函数中调用，实现页面一加载就调用
            /* this.getCarousel() */
        },
        methods: {
            /* getCarousel() {
                //获取轮播图数据的方法
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(function (result) {
                    //判断数据
                    if (result.body.status === 0) {
                        //获取数据成功
                        this.carouselList = result.body.message;
                    } else {
                        //获取数据失败
                        Toast('加载轮播图失败...')
                    }
                })
            } */
        },
        components: {
            swiper: swiper
        }
    }
</script>
<style lang="scss" scoped>
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: 0;
        img {
            width: 3rem;
        }
    }
</style>