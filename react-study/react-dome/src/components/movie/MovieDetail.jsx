import React from 'react'

import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import fetchJsonp from 'fetch-jsonp'

import { Spin, Alert, Pagination } from 'antd';

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {}, // 电影信息对象
            isLoading: true
        }
    }
    
    componentWillMount() {
        // https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a
        fetchJsonp('https://api.douban.com/v2/movie/subject/'+ this.props.match.params.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then(response => response.json())
        .then(data => {
            this.setState({
                info: data,
                isLoading: false
            })
            
        })
    }

    render() {
        return <div>
            <Button type="primary" icon={<LeftOutlined />} onClick={this.goBack} >
                返回电影列表页面
            </Button>
            {this.renderInfo()}
        </div>
    }

    // 实现返回按钮的功能
    goBack = () => {
        this.props.history.go(-1)
    }

    renderInfo = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
            <Alert
                message="正在请求电影数据"
                description="精彩内容，马上呈现..."
                type="info"
                />
            </Spin> ;
        } else {
            return <div>
                <div style={{textAlign: "center"}}>
                    <h3>{this.state.info.title}</h3>
                    <img src={this.state.info.images.large} alt=""/>
                </div>
                <p style={{lineHeight: "30px"}}>{this.state.info.summary}</p>
            </div>
        }
    }
}