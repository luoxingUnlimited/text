<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25;"><!-- :data-numbox-max='max' -->
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChanged" ref="numbox" readonly />
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
            //每当数量改变， 则例即把最新的数量同步到购物车的 store 中，覆盖之前的数量值
            this.$store.commit('updateGoodsInfo', {id: this.goodsId, count: this.$refs.numbox.value})
        }
    },
    props: ["initCount", "goodsId"]
}
</script>

<style lang="scss" scoped>

</style>