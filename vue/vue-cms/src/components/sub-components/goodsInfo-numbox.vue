<template>
    <div class="mui-numbox" data-numbox-min='1' ><!-- :data-numbox-max='max' -->
        <!-- 使用 watch 属性监听 来监听父组件传递过来的 max 值 不管watch被触发几次，最后一次 一定是满足要求的max值 -->
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'

export default {
    mounted() {
        //初始化数字选择框组件
        mui('.mui-numbox').numbox();
    },
    methods: {
        countChanged() {
            //每当文本框的数据被修改，立即把最新的数据通过事件调用传递给父组件
            //子组件调用父组件的方法,将值以参数的方式传递
            this.$emit('getCount', parseInt(this.$refs.numbox.value));
        }
    },
    props: ['max'],
    watch: {
        //watch属性监听 max的改变
        'max': function (newVal, oldVal) {
            //mui 中number box 的 js api 动态设置最大值
            mui('.mui-numbox').numbox().setOption('max', newVal);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>