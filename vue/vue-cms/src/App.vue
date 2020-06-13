<template>
    <div class="container">
        <!-- 顶部 header 区 -->
        <mt-header fixed title="Vue项目"></mt-header>
        <!-- 中间路由 router-view 区 -->
		<transition>
			<!-- 给路由切换的时候添加动画 -->
			<router-view></router-view>
		</transition>
        <!-- 底部 tabbar 区 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop_car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>
<script>
 

export default {
   
}
</script>
<style lang="scss" scoped>
    .container {
		padding-top: 40px;
		overflow-x: hidden;//解决动画过程中出现的横向滚动条
		.v-enter {
			opacity: 0;
			transform: translateX(100%);
		}
		.v-leave-to {
			opacity: 0;
			transform: translateX(-100%);//让页面从左边出去，而不是回到最终的原来的位置
			position: absolute;//解决页面切换的时候 页面飘起来的问题
		}
		.v-enter-active,
		.v-leave-active {
			transition: opacity 1s linear, transform 1s linear;
		}
    }
</style>