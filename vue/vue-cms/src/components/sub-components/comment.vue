<template>
    <div class="comment_container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容（少于120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt_list">
            <div class="cmt_item">
                <!-- <div class="cmt_item" v-for="(item, i) in comments" :key="item.add_time"> -->
                <h4 class="cmt_title">
                    第1楼&nbsp;&nbsp;用户：匿名发表&nbsp;&nbsp;发表时间：2019-12-12 12:12:12
                    <!-- 第{{ i + 1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }} -->
                </h4>
                <p class="cmt_body">
                    优雅永不过时
                    <!-- {{ item.content === 'undefined' ? '该用户很懒，什么也没写' : item.content }} -->
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    //导入弹框组件
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                pageIndex: 1,
                comments: [],//默认展示第一页数据
                msg: ''//评论输入的内容
            }
        },
        created() {
            //this.getComments()
        },
        methods: {
            getComments() {
                //获取评论数据
               /*  this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(result => {
                    if (result.body.status === 0) {
                        // this.comments = result.body.message;
                        //加载更多的时候并不是直接覆盖之前的数据，而是拼接上之前的数据
                        this.comments = this.comments.concat(result.body.message);
                    } else {
                        Toast('获取评论失败...');
                    }
                }) */
            },
            getMore() {
                //加载更多
                /* this.pageIndex++;
                this.getComments(); */
            },
            postComment() {
                /* //发表评论
                //判断评论内容是否为空
                if (this.msg.trim().length === 0) {
                    return Toast('评论内容不能为空');
                }
                //post请求：
                //参数1：请求的url地址
                //参数2：提交给服务器的数据对象（content：this.msg  是api规定要传的）
                //参数3：定义提交时候，表单中数据的格式 （emulateJSON: true）
                this.$http.post('api/postcomment/' + this.$route.params.id, {
                    content: this.msg.trim()
                })
                .then(function (result) {
                    if (result.body.stauts === 0) {
                        //拼接评论对象
                        var cmt = {
                            user_name: '匿名用户', 
                            add_time: Date.now(),
                            content: this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = '';
                    }
                }) */
            }
        },
        
        props: ["id"]
    }
</script>
<style lang="scss">
    .comment_container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt_list {
            margin: 5px 0;
            .cmt_item {
                font-size: 12px;
                .cmt_title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt_body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }  
        }
    }
</style>