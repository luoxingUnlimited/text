<template>
    <div>
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
				<router-link :to="'/home/newsInfo' + item.id">
					<img class="mui-media-object mui-pull-left" src="../../images/cat.jpg">
                    <!-- <img class="mui-media-object mui-pull-left" :src="{{ item.url }}"> -->
					<div class="mui-media-body">
						<h4>幸福 --- 能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</h4>
                        <!-- <h4>{{ item.title }} </h4> -->
						<p class='mui-ellipsis'>
                            <span>发表时间：2019-12-12 12:12:12</span>
                            <span>点击 12 次</span>
                            <!-- <span>发表时间：{{ item.add_time | dateFormat }}</span> -->
                            <!-- <span>点击：{{ item.click }}次</span> -->
                        </p>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../images/cat.jpg">
					<div class="mui-media-body">
						<h4>木屋 --- 想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</h4>
						<p class='mui-ellipsis'>
                            <span>发表时间：2019-12-12 12:12:12</span>
                            <span>点击 12 次</span>
                        </p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../images/cat.jpg">
					<div class="mui-media-body">
						<h4>CBD --- 烤炉模式的城，到黄昏，如同打翻的调色盘一般.</h4>
						<p class='mui-ellipsis'>
                            <span>发表时间：2019-12-12 12:12:12</span>
                            <span>点击 12 次</span>
                        </p>
					</div>
				</a>
			</li>
		</ul>
    </div>
</template>
<script>
    //导入提示信息组件
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                newsList: []
            }
        },
        created() {//在生命周期函数中调用方法 获取数据 渲染在页面
            //this.getNewsList()
        },
        methods: {
            /* getNewsList() {
                this.$http.get('api/getnewslist').then(result => {
                    if (result.body.status === 0) {
                        this.newsList = result.body.message;
                    } else {
                        Toast('获取新闻列表失败')
                    }
                })
            } */
        }
    }
</script>
<style lang="scss" scoped>
    .mui-table-view {
        li {
            h4 {
                font-size: 16px;
                font-weight: 400;
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #ccc;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>