import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native'

// 导入轮播图组件
import Swiper from 'react-native-swiper'
// 导入轮播图样式
const styles = StyleSheet.create({
    box: {
        width: '33.333%',
        alignItems: 'center',
        marginTop: 15,
    }
  })

//按需导入路由相关组件 Actions 要进行路由的js操作了,可以跳转到新路由
import {Actions} from 'react-native-router-flux'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carousel: [] //轮播图数据数组
        }
    }
    componentWillMount() {
        // 组件即将挂载的时候请求数据
        /* fetch('http://vue.studyit.io/api/getlunbo')
        .then(res => res.json())
        .then(data => {
            this.setState({
                carousel: data.message
            })
        }) */
    }
    render() {
        return (
            <View>
                {/*  轮播图结构 */}
                <View style={{ height: 200}}>
                    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                        {/* 调用数组的map方法 循环渲染轮播图数组的每一项 */}
                        {/* {this.state.carousel.map((item, i) => {
                            return (
                                <View key={i}>
                                    <Image source={{uri: item.img}} style={{width:'100%', height:'100%'}}></Image>
                                </View>
                            );
                        })} */}

                        <View style={styles.slide1}>
                          <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                          <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                          <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <View style={style.box}>
                        <Image source={require('../../images/menu1.png')} style={{width:60,height:60}}></Image>
                        <Text>新闻资讯</Text>
                    </View>
                    <View style={style.box}>
                        <Image source={require('../../images/menu2.png')} style={{width:60,height:60}}></Image>
                        <Text>图片分享</Text>
                    </View>
                    <View style={style.box}>
                        <Image source={require('../../images/menu3.png')} style={{width:60,height:60}}></Image>
                        <Text>商品购买</Text>
                    </View>
                    <View style={style.box}>
                        <Image source={require('../../images/menu4.png')} style={{width:60,height:60}}></Image>
                        <Text>留言反馈</Text>
                    </View> 
                    <TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={style.box}>
                        <View style={style.box}>
                            <Image source={require('../../images/menu5.png')} style={{width:60,height:60}}></Image>
                            <Text>热映电影</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={style.box}>
                        <Image source={require('../../images/menu6.png')} style={{width:60,height:60}}></Image>
                        <Text>联系我们</Text>
                    </View>
                </View>
            </View>
        );

       // 点击触发的去电影列表的事件
       goMovieList = () => {
           //要跳转到电影列表页面，使用编程式导航
           Actions.movielist()
       } 
    }
}