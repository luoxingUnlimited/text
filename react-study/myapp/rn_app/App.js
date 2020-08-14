/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

// 导入tabbar相关组件
import TabNavigator from 'react-native-tab-navigator';

// 导入tab栏组件
import Home from './components/tabbars/Home.js'
import Me from './components/tabbars/Me.js'
import Search from './components/tabbars/Search.js'
import Shopcar from './components/tabbars/Shopcar.js'

// 导入图标组件
import Icon from 'react-native-vector-icons/FontAwesome';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Component } from 'react';
 
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home' // 默认tab栏名称选中的是home
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          {/* 主页tab栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Icon name="home" size={25} color="#555" />}
            renderSelectedIcon={() => <Icon name="home" size={25} color="#0079ff" />}
            onPress={() => this.setState({ selectedTab: 'home' })}
            >
            <Home></Home>
          </TabNavigator.Item>

          {/* 搜索的tab栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="搜索"
            renderIcon={() => <Icon name="search" size={25} color="#555" />}
            renderSelectedIcon={() => <Icon name="search" size={25} color="#0079ff" />}
            //renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'search' })}
            >
            <Search></Search>
          </TabNavigator.Item>

          {/* 购物车的tab栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'shopcar'}
            title="购物车"
            badgeText="1"
            renderIcon={() => <Icon name="shopping-cart" size={25} color="#555" />}
            renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079ff" />}
            //renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'shopcar' })}
            >
            <Shopcar></Shopcar>
          </TabNavigator.Item>

          {/* Me的tab栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'me'}
            title="me"
            renderIcon={() => <Icon name="user" size={25} color="#555" />}
            renderSelectedIcon={() => <Icon name="user" size={25} color="#0079ff" />}
            //renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'me' })}
            >
            <Me></Me>
          </TabNavigator.Item>

        </TabNavigator>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

