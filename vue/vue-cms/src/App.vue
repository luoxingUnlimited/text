<template>
    <div class="container">
        <!-- 顶部 header 区 -->
        <mt-header fixed title="Vue项目">
			<span slot="left" @click="goBack" v-show="flag">
    			<mt-button icon="back">返回</mt-button>
  			</span>
		</mt-header>
        <!-- 中间路由 router-view 区 -->
		<transition>
			<!-- 给路由切换的时候添加动画 -->
			<router-view></router-view>
		</transition>
        <!-- 底部 tabbar 区 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-c" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-c" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-c" to="/shop_car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
				<span class="mui-badge" id="badge">0</span></span>
				<!-- <span class="mui-badge" id="badge">{{ this.$store.getters.getAllCount }}</span></span> -->
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-c" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>
<script>
 

export default {
   data() {
	   return {
		   flag: false
	   }
   },
   created() {
	   this.flag = this.$route.path === '/home' ? false : true;
   },
   methods: {
	   goBack() {
		   //点击后退,涉及路由历史操作
		   this.$router.go(-1);
	   }
   },
   watch: {
	   //监听路由路径改变
	   '$route.path': function(newVal) {
		   if (newVal === '/home') {
			   this.flag = false;
		   } else {
			   this.flag = true;
		   }
	   }
   }
}
</script>
<style lang="scss" scoped>
	.mint-header {
		z-index: 999;
	}
    .container {
		padding-top: 40px;
		padding-bottom: 50px;
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

	//更改类名，解决tab-bar点击无法切换的问题，因为mui内部tab-bar文件的类名和js文件冲突导致无法切换
	//将mui-tab-item更改为mui-tab-item-c
	.mui-bar-tab .mui-tab-item-c.mui-active {
		color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-c {
    	display: table-cell;
    	overflow: hidden;
    	width: 1%;
    	height: 50px;
    	text-align: center;
    	vertical-align: middle;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	color: #929292;
	}
	.mui-bar-tab .mui-tab-item-c .mui-icon {
	    top: 3px;
	    width: 24px;
	    height: 24px;
	    padding-top: 0;
	    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-c .mui-icon ~ .mui-tab-label {
	    font-size: 11px;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}

</style>