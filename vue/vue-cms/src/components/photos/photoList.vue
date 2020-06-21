<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
						推荐
					</a>
                   <!--  <a :class="['mui-control-item', item.id=0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
						{{ item.title }}
					</a> -->
					<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
						热点
					</a>
					<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
						北京
					</a>
					<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
						社会
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</a>
				</div>
			</div>
		</div>
        <!-- 图片列表区 -->
        <ul class="photo_list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <!-- <div class="info">
                    <h3 class="info_title">{{ item.title }}</h3>
                    <p class="info_body">{{ item.zhaiyao }}</p>
                </div> -->
            </router-link>
        </ul>
    </div>
</template>
<script>
//1.导入mui的js文件
import mui from '../../lib/mui/js/mui.js'
//导入mint-ui的toast弹框模块
import { Toast } from 'mint-ui'

    export default {
        data() {
            return {
                cates: [],//所有分类的列表
                list: []//图片列表的数组
            }
        },
        created() {
            this.getAllCategory();
            //默认进入页面，就请求全部图片列表
            this.getPhotoListByCateId(0);
        },
        mounted() {
            //当组件中的dom结构被渲染好，并放在页面中后，会执行这个生命周期函数
            //如果要操作元素，最好在mounted中，因为这个生命周期函数中的dom元素是最新的
            //2.初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
	            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getAllCategory() {
                //获取所有图片分类
                /* this.$http.get('api/getimgcategory').then(result => {
                    if (result.body.staus === 0) {
                        result.body.message.unshift({ title:'全部', id:0 });
                        this.cates = result.body.message;
                    } else {
                        Toast('获取图片失败');
                    }
                }) */
            },
            getPhotoListByCateId(cateId) {
                //根据 分类id 获取图片列表
               /*  this.$http.get('api/getimages/' + cateId).then(result => {
                    if (result.body.staus === 0) {
                        this.list = result.body.message;
                    } else {
                        Toast('获取图片列表失败');
                    }
                }) */
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        touch-action: pan-y;//解决顶部滑动区，滑动时的警告
    }
    .photo_list {
        list-style: none;
        padding: 10px;
        margin: 0;
        padding-bottom: 0;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy="loading"] {//懒加载图片样式
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info {
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 84px;
                .info_title {
                    font-size: 14px;
                }
                .info_body {
                    font-size: 12px;
                }
            }
        }
    }
    
</style>