// pages/list/list.js
const fetch = require('../../utils/fetch')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前加载的分类
    category: {},
    //该分类下的店铺
    shops: [],
    pageIndex: 0,
    pageSize: 10,
    hasMore: true
  },
  //加载下一页数据
  loadMore () {
    if (!this.data.hasMore) return
    let { pageIndex, pageSize } = this.data
    const params = {_page: ++pageIndex, _limit: pageSize}
    return fetch(`category/${this.data.category.id}/shops`, params)
    .then(res => {
      const totalCount = parseInt(res.header['X-Total-Count'])
      const hasMore = pageIndex * pageSize < totalCount
      const shops = this.data.shops.concat(res.data)
      this.setData({shops, pageIndex, hasMore})
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch(`categories/${options.cat}`).then(res => {
      /* 不能确定这里一定在onReady过后执行
      wx.setNavigationBarTitle({
        title: res.data.name
      }) */
      //先将数据记录下来
      this.setData({category: res.data})
      wx.setNavigationBarTitle({
        title: res.data.name 
      })
      //加载完分类信息之后，加载商铺信息
      this.loadMore()
    })  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //有数据记录之后才能在onReady这里执行标题的设置
    if (this.data.category.name) {
      wx.setNavigationBarTitle({
        title: res.data.name
      })  
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //重新加载数据
    //初始化数据
    this.setData({shops: [], pageIndex: 0, hasMore: true})
    this.loadMore().then(() => {
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //加载下一页数据
    //判断正在加载的时候，就不要执行下一次加载，否则会有多次触发问题
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})