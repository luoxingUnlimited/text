import React, {Component} from 'react'
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native'

export default class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieInfo: {}, // 电影信息
            isLoading: true
        }
    }

    componentWillMount() {
        // https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a
        fetch('https://api.douban.com/v2/movie/subject/' + this.props.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then(res => res.json())
        .then(data => {
            this.setState({
                movieInfo: data,
                isLoading: false
            })
        })
    }
    render() {
        return <View>
            {this.renderInfo}
        </View>
    }

    renderInfo = () => {
        if (this.state.isLoading) {
            return <ActivityIndicator size="large"></ActivityIndicator>
        }
        return <ScrollView>
            <View style={{padding: 4}}>
                <Text style={{fontSize: 25, textAlign: 'center', marginTop: 20, marginBottom: 20}}>{this.state.movieInfo.title}</Text>
                <Image source={{ uri: this.state.movieInfo.images.large}} style={{width: 200, height: 280}}></Image>
                <Text style={{lineHeight: 30, marginTop: 20}}>{this.state.movieInfo.summary}</Text>
            </View>
        </ScrollView>
    }
}