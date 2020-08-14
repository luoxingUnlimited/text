import React from 'react'

// 导入UI组件
import { Spin, Alert, Pagination } from 'antd';

// 导入fetch-jsonp
import fetchJsonp from 'fetch-jsonp'

// 导入每一项电影框
import MovieItem from './MovieItem.jsx'


export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],// 电影列表
            nowPage: parseInt(props.match.params.page) || 1,// 显示电影当前页
            pageSize: 12,// 每页显示多少部电影
            total: 0,// 当前电影分类下，总共有多少条数据
            isLoading: true,// 数据是否正在加载，true表示正在加载
            movieType: props.match.params.type // 保存要请求的电影类型
        }
    }

    componentWillMount() {
        // 组件将要挂载的时候
        //fetch('')

        /* setTimeout(() => { //假设数据一秒钟加载完成，模拟加载完成之后的页面状态
            this.setState({
                isLoading: false // 此时数据已经加载完成，所以加载状态为false
            })
        }, 1000); */

        this.loadMovieByTypeAndPage()
    }

    // 监听数据发生改变 组件将要接收新属性
    componentWillReceiveProps(nextProps) {
        // 地址栏变化的时候，重置state中的参数想，重置完毕之后，重新发起数据请求
        this.setState({
            isLoading: true,// 重新加载电影数据
            nowPage: parseInt(nextProps.match.params.page) || 1,// 要获取第几页的数据
            movieType: nextProps.match.params.type,// 电影类型
            total: 0
        }, function() {
            this.loadMovieByTypeAndPage()
        })
    }

    render() {
        return  <div>
            { this.renderList() }
        </div>
    }

    // 根据电影类型和页码，获取电影数据
    loadMovieByTypeAndPage = () => {
        /* fetch('http://api.douban.com/v2/movie/in_theaters')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        }) */
        /* fetchJsonp('http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        }) */

        /* const start = this.state.pageSize * (this.state.nowPage - 1)
        const url = `http://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`

        fetchJsonp(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                isLoading: false,// 隐藏loading效果
                movies: data.subjects,// 为电影列表重新赋值
                total: data.total// 把总条数保存在state上
            })
        }) */
        const data = require('../test_data/' + this.state.movieType + '.json')
        setTimeout(() => {
            this.setState({
                isLoading: false,// 隐藏loading效果
                movies: data.subjects,// 为电影列表重新赋值
                total: data.total// 把总条数保存在state上
            })
        }, 1000)
    }
    // 渲染电影列表的方法
    renderList = () => {
        if (this.state.isLoading) { // 加载中
            return <Spin tip="Loading...">
            <Alert
                message="正在请求电影列表"
                description="精彩内容，马上呈现..."
                type="info"
                />
            </Spin> ;
        } else { // 加载完成 return电影列表
        return <div>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.state.movies.map(item => {
                    return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                })}
            </div>
            {/* 分页 */}
            <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged} />
        </div>
        }
    }

    // 当页码改变的时候，加载新一页的数据
    pageChanged = (page) => {
        // 操作BOM对象不太好，建议使用路由方法，进行编程式导航
        // window.location.href = '/#/movie/' + this.state.movieType + '/' + page

        // 使用react-router-dom 实现编程式导航
        this.props.history.push('/movie/' + this.state.movieType + '/' + page)
    }
}