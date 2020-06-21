<template>
    <div>
        <h3>这是容器中的第一个子组件</h3>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    div {
        text-align: center;
    }
</style>