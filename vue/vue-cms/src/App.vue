<template>
    <div class="container">
        <h2>这是一个最外层的App组件</h2>
        <!-- 顶部 header 区 -->
        <mt-header fixed title="Vue项目"></mt-header>
        <!-- 中间路由 router-view 区 -->
        <!-- 底部 tabbar 区 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>

    </div>
</template>
<script>
 

export default {
   
}
</script>
<style lang="scss" scoped>
    .container {
        padding-top: 50px;
    }
</style>