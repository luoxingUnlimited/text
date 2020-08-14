import { Component } from '@angular/core';
import { R3TargetBinder } from '@angular/compiler';

const todo = [{
  id: 1,
  title: 'reading',
  done: false
},{
  id: 2,
  title: 'running',
  done: true
},{
  id: 3,
  title: 'writing',
  done: false
}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 初始化一个数组
  public todo: {
    id: number,
    title: string,
    done: boolean,

  }[] = JSON.parse(window.localStorage.getItem('todo') || '[]')



  public visibility: string = 'all'

  // 当前编辑的任务项 默认null，没有当前双击编辑的任务项
  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null



  // 生命周期钩子函数 在angular应用初始化的时候执行一次
  ngOnInit () {
    // 初始化手动调用
    this.hashChangeHandler()
    // bind绑定this指向，前面的this指向window
    window.onhashchange =  this.hashChangeHandler.bind(this)
      // 当用户点击了锚点的时候，我们需要获取当前的锚点标识
      // 然后动态将根组件中的visibility设置为获取到的当前点击的锚点标识

  }

  // 当angular组件数据发生改变的时候
  // 需要在这个钩子函数中持久化存储数据
  ngDoCheck () {
    window.localStorage.setItem('todo', JSON.stringify(this.todo))
  }
  get filterTodo () {
    if (this.visibility === 'all') {
      return this.todo
    } else if (this.visibility === 'active') {
      return this.todo.filter(t => !t.done)
    } else if (this.visibility === 'Completed') {
      return this.todo.filter(t => t.done)
    }
  }

  addTodo(e):void {
    console.log(e)
    // e.target可获取到文本框DOM
    const titleText = e.target.value
    const last = this.todo[this.todo.length - 1]
    if (!titleText.length) {
      return
    }
    this.todo.push({
      id: last ? last.id + 1 : 1,
      title: titleText,
      done: false
    })
    // 清除文本框内容
    e.target.value = ''
    console.log(this.todo)
  }

  // 实现切换任务完成状态
  get toggleAll () {
    return this.todo.every(t => t.done)
  }

  set toggleAll (val) {
    this.todo.forEach(t => t.done = val)
  }

  // 删除任务项
  removeTodo(index: number):void {
    this.todo.splice(index, 1);
  }

  // 保存编辑的任务
  saveEdit (item, e) {
    // 保存编辑
    item.title = e.target.value
    // 清空编辑内容
    this.currentEditing = null
  }

  handleEditKeyUp (e) {
    const {keyCode, target} = e
    if (keyCode === 27) {
      // 取消编辑 同时将文本框的值恢复成原来的值
      target.value = this.currentEditing.title
      this.currentEditing = null
    }
  }

  // 剩余任务数量
  get remainingCount () {
    // 未完成的任务数量
    return this.todo.filter(t => !t.done).length
  }

  hashChangeHandler () {
    const hash = window.location.hash.substr(1)
    console.log(hash)

    switch (hash) {
      case '/':
        this.visibility = 'all'
        break;
      case '/active':
        this.visibility = 'active'
        break;
      case '/completed':
        this.visibility = 'completed'
        break;
    }
  }

  // 清除所有已完成任务
  clearAllDone () {
    this.todo = this.todo.filter(t => !t.done)
  }
}


