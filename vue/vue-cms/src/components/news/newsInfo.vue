<template>
    <div class="newsInfor_container">
        <!-- 大标题 -->
        <h3 class="title">新闻标题</h3>
        <!-- <h3 class="title">{{ newsInfo.title }}</h3> -->
        <!-- 子标题 -->
        <p class="sub_title">
            <span>发表时间：</span>
            <!-- <span>发表时间：{{ newsInfo.add_time | dateFormat }}</span> -->
            <span>点击： 次</span>
            <span>点击：{{ newsInfo.click }} 次</span>
        </p>
        <hr>
        <!-- 内容区 -->
        <div class="content" v-html="newsInfo.content">
        </div>
        <!-- 评论区 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
    //导入弹框提示模块
    import { Toast } from 'mint-ui'
    //1.导入评论子组件
    import comment from '../sub-components/comment.vue'

    export default {
        data() {
            return {
                //将url地址中传过来的id挂载在data上， 方便以后调用
                id: $route.params.id,
                newsInfo: {} //新闻对象
            }
        },
        created() {
            //this.getNewsInfo();
        },
        methods: {
            getNewsInfo() {
                /* this.$http.get('/api/getnew/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.newsInfo = result.body.message[0];
                    } else {
                        Toast('获取新闻失败...');
                    }
                }) */
            }
        },
        components: {
            //注册子组件 '组件名'：组件模板
            'commentBox': comment
        }
    }
</script>
<style lang="scss">//去掉scoped  虽然去掉后容易全局污染,但是newsInfo页面的样式都在.newsInfor_container中，不存在对其它页面造成样式污染
    .newsInfor_container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
        }
        .sub_title {
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content {
            img {
                width: 100%;//给内容中的img宽度100%，同时去掉样式中的scoped才能实现图片正常显示
            }
        }
    }
</style>