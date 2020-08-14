/**
 * @format
 */

// AppRegistry react-native中用来注册项目首页的组件
import {AppRegistry} from 'react-native';
// import App from './App';
import Main from './Main.js'
import {name as appName} from './app.json';

// 该方法中的第一个参数不要修改，改了之后会导致项目报废
// 该方法中的第二个参数表示要把哪个页面作为该项目的首页 
AppRegistry.registerComponent(appName, () => Main);
