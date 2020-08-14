// main 才是项目的根组件
import React, {Component} from 'react'
import {View, Text} from 'react-native'

// 导入路由相关组件 
import {Router, Stack, Scene} from 'react-native-router-flux'

// 导入App组件
import App from './App.js'

//导入电影列表组件
import MovieList from './components/movie/MovieList.js'
//导入电影详情页面
import MovieDetail from './components/movie/MovieDetail.js'


export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Router seneStyle={{backgroundColor: '#fff'}}>
                <Stack key="root">
                    {/* 配置路由规则 */}
                    <Scene key="app" component={App} title="App组件" />
                    <Scene key="movielist" component={MovieList} title="热映电影" />
                    <Scene key="moviedetail" component={MovieDetail} title="电影详情" />
                </Stack>   
            </Router>
        );
    }
}