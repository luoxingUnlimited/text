//项目的根组件
// 导入react以及路由
import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

// 导入需要的Ant Design 组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

//导入模块化样式
// import './css/app.scss'
import style from './css/app.scss'
// {console.log(style)}

// 导入路由相关的组件
import HomeContainer from './components/home/HomeContainer.jsx'
import MovieContainer from './components/movie/MovieContainer.jsx'
import AboutContainer from './components/about/AboutContainer.jsx'

//创建根组件 并导出
export default class App extends React.Component {
    //构造器
    constructor(props) {
        super(props)
        
        this.state = {
            //组件私有数据
        }
    }
    componentWillMount() {
        // 页面将要挂载的生命周期函数
        // window.location.hash.split('/')[1]就可以拿到页面url地址数据
        //console.log(window.location.hash.split('/')[1])
    }
    render() {
        return <HashRouter>
            <Layout className="layout" style={{ height:"100%" }}>
                {/* 头部区域 */}
                <Header>
                    <div className={ style.logo } />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_theaters/1">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                {/* 中间内容区域 */}
                <Content style={{ backgroundColor: "#fff", flex: 1 }}>
                    <Route path="/home" component={ HomeContainer }></Route>
                    <Route path="/movie" component={ MovieContainer }></Route>
                    <Route path="/about" component={ AboutContainer }></Route>
                </Content>
                {/* 底部信息区域 */}
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </HashRouter>
    }
}