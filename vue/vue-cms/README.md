# 这是学习vue过程中的一个项目

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-Ui 中的 Header 组件
2. 制作底部 Tab-bar 区域， 使用的是 MUI 中的 tab-bar.html
    + 购物车小图标要去 找对应的 图标样式
    + 同时还要拷贝相应的样式文件 以及 样式对应的类名
3. 要在中间区域放置一个 router-view 展示路由匹配到的组件
4. 改造 tab-bar 为 router-link 更改类样式实现当前项高亮显示

## 创建路由链接 实现路由切换
1. 创建不同路由组件模板
2. 让路由与组件模板之间创建联系

## carousel（轮播图）数据渲染
1. 获取数据， 使用 vue-resource
2. vue-resource 提供 this.$http.get get请求获取数据
3. 获取到的数据存放在 data中事先创建好的数据数组中
4. v-for 循环渲染item每一项生成在页面中

## 九宫格区域

## 动画过程中的一些问题
1. 给最外层的容器添加横向溢出隐藏，
> `.container {`
> ` overflow-x: hidden;` **解决动画过程中出现横向滚动条**
> `}`
2. v-leave-to,决定了动画结束最终表现出来的位置，状态，在这个动画点可设置回到原来起始位置，也可去到其他位置， 
> `.v-leave-to {`
> `opacity: 0;transform: translateX(-100%);` **实现动画右边进来左边出去**
> `position: absolute;`**解决动画过程中页面飘起来的问题**
> `} `

## 添加新闻资讯路由

## 新闻资讯页面制作
1. 绘制页面 使用 mui 中的 media-list模板
2. 使用 vue-resource 获取数据
3. 将数据渲染在页面

## 点击新闻资讯列表 跳转到详情
1. 把列表中的每一项都改造为 router-link 同时在跳转的时候提供唯一的id标识符
2. 创建新闻详情的组件页面 newsInfo
3. 在路由模块 router.js 中将新闻详情的路由地址与组件关联起来

## 新闻详情页面布局及数据渲染 Ajax请求

## 单独封装一个评论子组件 comment.vue
1. 创建一个单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中，手动导入组件模板
> `import comment from './comment.vue'`
3. 在父组件中，使用 components 属性，将 comment 组件注册为自己的子组件
4. 将注册在属性 components 下定义的组件名称，以标签的形式在页面引用即可

## 获取所有的评论数据 显示在页面中
1. getComments

## 实现点击加载更多评论的功能
1. 为加载更多按钮绑定点击事件 在事件中请求下一页的数据
2. 点击加载更多让 pageIndex 自增，重新调用this.getComments() 获取最新的一页数据
3. 为了防止新数据覆盖老数据 点击加载更多的时候 获取新数据应该让老数据调用数组的 concat() 方法拼接数据

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表评论绑定事件
3. 校验评论内容是否为空，如果为空，则toast弹框提示用户 内容不能为空
4. 通过 vue-resource 发送请求， 把评论内容提交给服务器
5. 当评论发表好了之后，通过重新刷新列表， 以查看最新的评论
 + 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
 + 所以换一种方式实现：当评论成功后，在客户端手动拼接出 最新的评论对象，调用数组的unshift方法，把最新的评论对象，追加到data中 comments的开头， 实现数显评论列表的需求

## 点击图片分享 跳转到相应的组件页面

## 绘制图片列表组件的页面结构
1. 顶部的滑动条
2. 底部的图片
### 制作顶部滑动条
1. 借助于 mui 中的 tab-top-webview-main.html
2. 去掉 slider 那个盒子的 mui-fullscreen 类名去掉，因为导致顶部滑动条是全局充满的
3. 滑动条无法正常触发滑动，查看官方文档，这是js组件，需要初始化
 + 导入 mui.js 
 + 调用官方提供的代码初始化
> `mui('.mui-scroll-wrapper').scroll({`
>   `deceleration: 0.0005 //flick `减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
> `});`
4. 初始化滑动条的时候，导入mui.js， 控制台报错：Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode
 + 可能是mui.js 中用到了'caller', 'callee', and 'arguments'，但是 webpack 默认是启用严格模式的，所以这两者冲突
 + 解决方案： 1. 把mui.js中的非严格模式的代码改掉，不可行；2. 把 webpack 打包时的严格模式给禁用掉
 + 最终确定方案2，使用插件禁用webpack的严格模式："babel-plugin-transform-remove-strict-mode"
5. 刚进入图片分享页面的时候，滑动条无法正常滑动，经过分析发现，如果要初始化滑动条，必须等DOM元素加载完毕，所以要把初始化滚动条的代码，书写在 mounted 生命周期函数中
6. 当滑动条调试好了之后 tab-bar没办法切换，这时候，需要把每个tabbar按钮的类样式`mui-tab-item`更换名字为`mui-tab-item-c` 因为mui内部tab-bar文件的类名和js文件冲突导致无法切换
7. 获取所有分类，并渲染分类列表

### 制作图片列表区域
1. 图片列表需要使用懒加载技术，可以使用mint-ui提供的 lazy load 组件完成 
2. 根据 lazy load 的使用文档，尝试使用
3. 渲染图片列表

### 实现图片列表的懒加载与样式美化

## 实现点击图片 跳转到图片详情页面
1. 在改造 li 为 router-link 时，要利用 tag 属性指定渲染为 li 元素 

## 实现详情页面的布局和美化 同时获取数据渲染页面

## 实现图片详情中的 缩略图部分
1. 使用缩略图插件 vue-preview 
2. 获取到所有的图片列表 然后使用v-for 渲染
3. img标签上的class 属性不能去掉
4. 每个图片数据中都要有 w 和 h 属性

## 绘制商品列表 页面基本结构

## 尝试在手机上进行项目的预览和测试
1. 保证手机可以正常运行
2. 保证手机和开发项目的电脑处于同一网络环境，也就是手机可以访问到电脑IP
3. 打开自己项目的 package.json 文件 在dev脚本中。 添加 --host 指令， 把当前电脑的WiFi IP 地址设置为 --host 的指令值
 + 查看自己电脑所处WiFi IP： cmd 终端运行 `ipconfig` 查看无线网IP