import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, ActivityIndicator, FlatList, TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
    movieTitle: {
        fontWeight: "bold"
    }
})

export default class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],// 电影列表
            nowPage: 1,// 当前显示的页码
            totalPage: 0,//总的页数
            pageSize: 12,// 一页显示多少条数据
            isLoading: true// 是否正在加载 
        }
    }

    componentWillMount() {
        this.getMoviesByPage()
    }
    render() {
        return (
            <View>
                {this.renderList}
            </View>
        );
    }
    getMoviesByPage = () => {
        // 根据页码获取电影列表
        const start = (this.state.nowPage - 1) * this.state.pageSize
        const url = 'http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10'
        // const url = `http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=${this.state.pageSize}`
        // start 请求的起始位置 count 请求的数据条数

        /* fetch(url) 
        .then(res => res.json())
        .then(data => {
            this.setState({
                movies: this.state.movies.concat(data.subjects),
                isLoading: false,
                totalPage: Math.ceil(data.total / this.state.pageSize)
            })
        }) */
        setTimeout(() => {
            this.setState({
                movies: require('./test_list.json').subjects,
                isLoading: false,
                totalPage: 1
            })
        }, 1000)
    }
    // 渲染电影列表的方法
    renderList = () => {
        if (this.state.isLoading) {
            // 正在加载就导入加载器组件
            return <ActivityIndicator size="large"></ActivityIndicator>
        } else {
            return  <FlatList
                data={this.state.movies}
                renderItem={({item}) => this.renderItem(item)} // 调用方法去渲染每一项
                keyExtractor={(item, i) => i} //解决key的问题
                ItemSeparatorComponent={this.renderSeparator} //渲染分割线的属性和方法
                onEndReachedThreshold={0.5} // 距离底部还有多远的时候，触发加载更多事件
                onEndReached={this.loadNextPage} //当距离不足0.5时，触发这个方法加载下一页数据
            />
        }
    }

    // 渲染每项电影
    renderItem = (item) => {
        return <TouchableHighlight underlayColor="#fff" onPress={() => {Actions.moviedetail({id: item.id})}}>
            <View style={{flexDirection: "row", padding:10}}>
                <Image source={{uri: item.images.small}} style={{width: 100, height: 140, marginRight: 10}} />
                <View style={{ justifyContent:"space-around"}}>
                    <Text>
                        <Text style={styles.movieTitle}>电影名称：</Text>{item.title}
                    </Text>
                    <Text>
                        <Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join(',')}
                    </Text>
                    <Text>
                        <Text style={styles.movieTitle}>制作年份：</Text>{item.year} 年
                    </Text>
                    <Text>
                        <Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average} 分
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    }

    // 渲染分割线
    renderSeparator = () => {
        return <View style={{borderTopColor: "#ccc", borderTopWidth: 1, marginLeft: 10, marginRight: 10}}></View>
    }
    
    // 加载下一页
    loadNextPage = () => {
        //判断如果下一页的页码值大于总的页码数，直接return
        if ((this.state.nowPage + 1) > this.state.totalPage) {
            return
        }
        this.setState({
            nowPage: this.state.nowPage + 1
        }, function() {
            this.getMoviesByPage()
        })
    }
    
}