<template>
    <div>
        <!-- 将轮播图区域封装成一个组件 -->
        <!-- 谁使用这个轮播图组件，谁来传递 carouselList -->
        <!-- 此时应该父组件向子组件传值进行设置 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in carouselList" :key="item.url">
                <img :src="item.img" alt="" :class="{ full: isFull }">
            </mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <h3></h3>
    </div>
</template>

<script>
export default {
    props: ['carouselList', 'isFull']//想要展示轮播图数据 必须传carouselList
}
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            text-align: center;
            &:nth-child(1) {
                background-color: salmon;
            }
            &:nth-child(2) {
                background-color: springgreen;
            }
            &:nth-child(3) {
                background-color: slateblue;
            }
            img {
                // width: 100%;
                height: 100%;
            }
        }
    }
    .full {
        width: 100%;
    }
</style>