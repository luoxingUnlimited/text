<template>
    <div class="container">
        <h2>这是一个最外层的App组件</h2>
        <!-- <my-button type="primary">myButton</my-button> -->

        <router-link to="/Account">Account</router-link>
        <router-link to="/GoodsList">GoodsList</router-link>
        <router-view></router-view>
        <mt-button type="danger">default</mt-button>
        <mt-button size="large" @click="show">large</mt-button>
        <mt-button disabled>disabled</mt-button>
        <mt-button plain>plain</mt-button>
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>

    </div>
</template>
<script>
//按需导入mint-ui中的js components部分
import {Toast} from 'mint-ui'

export default {
    data() {
        return {}
    },
    methods: {
        show() {
            Toast({
                message: '操作成功'
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        width: 800px;
        background-color: salmon;
        margin: 0 auto;
        text-align: center;
       .mint-button--danger {
           background-color: lawngreen;
       } 
    }
</style>