import React from 'react'

import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// 导入路由模块
import { Route, Link, Switch } from 'react-router-dom'

import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'

export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return  <Layout style={{ height: "100%" }}>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="in_theaters">
                        <Link to="/movie/in_theaters/1">正在热映</Link>
                    </Menu.Item>
                    <Menu.Item key="coming_soon">
                        <Link to="/movie/coming_soon/1">即将上映</Link>
                    </Menu.Item>
                    <Menu.Item key="top250">
                        <Link to="/movie/top250/1">Top250</Link>
                    </Menu.Item>   
                </Menu>
            </Sider>
            <Layout style={{ paddingLeft: '1px' }}>
                <Content style={{ background: "#fff", padding: 10 }}>
                    {/* 匹配路由规则的时候提供了两个参数
                        如果想要从路由规则中提取参数：this.props.match.params  
                    */}
                    <Switch>
                        <Route exact path="/movie/detail/:id" component={ MovieDetail }></Route>
                        <Route exact path="/movie/:type/:page" component={ MovieList }></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    }
}