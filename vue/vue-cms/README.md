# 这是学习vue过程中的一个项目

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-Ui 中的 Header 组件
2. 制作底部 Tabbar 区域， 使用的是 MUI 中的 tabbar.html
    + 购物车小图标要去 找对应的 图标样式
    + 同时还要拷贝相应的样式文件 以及 样式对应的类名
3. 要在中间区域放置一个 router-view 展示路由匹配到的组件
4. 改造 tabbar 为 router-link 更改类样式实现当前项高亮显示

## 创建路由链接 实现路由切换
1. 创建不同路由组件模板
2. 让路由与组件模板之间创建联系

## carousel（轮播图）数据渲染
1. 获取数据， 使用 vue-resource
2. vue-resource 提供 this.$http.get get请求获取数据
3. 获取到的数据存放在 data中事先创建好的数据数组中
4. v-for 循环渲染item每一项生成在页面中
