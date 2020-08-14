//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //文本框数据
    content: '',
    //任务列表数据
    list: [
        //任务名 任务完成状态
        {name: 'Learning HTML', completed: true},
        {name: 'Learning CSS', completed: true},
        {name: 'Learning JavaScript', completed: true},
        {name: 'Learning WeAPP', completed: false},
        {name: 'Learning React', completed: false},
    ],
    //剩余任务清单
    leftCount: 2,
    //全部任务完成状态： 默认为未完成
    allCompleted: false
  },

  //页面交互
  //1.点击 + 时候 拿到文本框中的内容
  //1.1 小程序的数据绑定是单向的，需要给文本注册改变事件 获取到用户输入到页面的内容
  //2. 将内容添加进list数据中
  inputChangedHandler: function (e) {
    //拿到页面用户输入的内容的事件处理函数
    //console.log(e);
    //通知界面要获取界面输入的内容
    this.setData({content: e.detail.value});
  },
  addListHandler: function () {
    //点击之后的事件处理函数 点击事件的绑定方式bindtap
    //console.log(this.data.content);
    //如果没有内容输入，无法添加
    if (!this.data.content) return;
    var list = this.data.list;
    list.push({
        name: this.data.content,
        completed: false
    })
    //通知界面做出数据同步 并清空input框的内容
    this.setData({ list: list, content: '', leftCount: this.data.leftCount + 1})
  },

  toggleListHandler: function (e) {
    //切换当前选中状态的事件处理函数  添加自定义属性，便于找到元素
    //console.log(e.currentTarget);
    var item = this.data.list[e.currentTarget.dataset.index];
    item.completed = !item.completed;
    //获取到list中当前切换项的completed值的变化，决定leftCount的多少
    var leftCount = this.data.leftCount + (item.completed ? -1 : 1);
    //通知界面做出数据同步
    this.setData({ list: this.data.list, leftCount: leftCount});
  },

  removeListHandler: function (e) {
    //删除选中的项  同样是添加自定义属性index，便于找到元素
    var list = this.data.list;
    //接收删掉的元素
    var item = list.splice(e.currentTarget.dataset.index, 1)[0];
    //判断被删掉的元素是完成的任务还是未完成的任务，再重新赋值剩余任务清单的数据
    var leftCount = this.data.leftCount + (item.completed ? 0 : -1);
    //通知界面做出数据同步
    this.setData({list: list, leftCount: leftCount});
  },

  toggleAllHandler: function () {
    //切换全部列表为完成或未完成
    this.data.allCompleted = !this.data.allCompleted;
    var list = this.data.list;
    list.forEach(item => {
        item.completed = this.data.allCompleted;
    })
    var leftCount = this.data.allCompleted ? 0 : this.data.list.length;
    //通知界面做出数据同步
    this.setData({list: list, leftCount: leftCount});
  },

  clearHandler: function () {
    //清除任务列表中已完成的任务
    var list = this.data.list.filter(item => {
        //遍历数组，返回 值为真的项组成的新数组
        return !item.completed;
    })
    //通知界面做出数据同步
    this.setData({list: list});
  }
})
