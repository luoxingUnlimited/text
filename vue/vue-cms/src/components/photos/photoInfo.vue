<template>
    <div class="photoInfo_container">
        <h3>标题</h3>
        <!-- <h3>{{ photoInfo.title }}</h3> -->
        <p class="sub_title">
            <span>发表时间：</span>
            <!-- <span>发表时间：{{ photoInfo.add_time | dateFormat }}</span> -->
            <span>点击： 次</span>
            <!-- <span>点击：{{ photoInfo.click }} 次</span> -->

        </p>
        <hr>
        <!-- 缩略图区 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" :key="item.src" :src="item.src" height="100" @click="$preview.open(index, list)">
        </div>
        <!-- 图片内容区 -->
        <div class="content"></div>
        <!-- <div class="content" v-html="photoInfo.content"></div> -->

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
//导入mint-ui的toast弹框模块
import { Toast } from 'mint-ui'
//导入评论子组件
import comment from '../sub-components/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,//从路由中获取的图片id
            photoInfo: {},//图片详情
            list: []//缩略图数组
        }
    },
    created() {
        this.getPhotoInfo();
    },
    methods: {
        getPhotoInfo() {
            //获取图片的详情
            /* this.$http.get('api/getimageiInfo/' + this.id).then(result => {
                if (result.body.status === 0) {
                    this.photoInfo = result.body.message[0];
                } else {
                    Toast('获取图片详情失败')
                }
            }) */
        },
        getThumbs() {
            //获取缩略图
            /* this.$http.get('api/getthumimages/' + this.id).then(resulet => {
                if (result.body.status === 0) {
                    result.body.message.forEach(item => {
                        //循环每个图片数据，补全 w 和 h 
                        item.w = 600;
                        item.h = 400;
                    });
                    //把完整的数据保存在list中
                    this.list = result.body.message;
                } else {
                    Toast('获取缩略图失败')
                }
            }) */
        }
    },
    components: {
        'cmt-box': comment//注册评论子组件
    }
}
</script>

<style lang="scss" scoped>
    .photoInfo_container {
        padding: 3px;
        h3 {
            color: #26a2ff;
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
        }
        .sub_title {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }
        .content {
            font-size: 14px;
            line-height: 30px;
        }
        .thumbs {
            margin: 10px;
            box-shadow: 0 0 9px #999;
        }
    }
</style>