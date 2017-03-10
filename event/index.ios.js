
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS
} from 'react-native';
import Login from './src/component/login/login'
import Map from './src/component/map/map'

export default class event extends Component {
    constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
      console.log("1");
      console.log(this.props.navigator);
}
renderScene(route, navigator) {
   if(route.id === 'Login') {
     return (<Login navigator={navigator} route={route} />)
   }
   if(route.id === 'Map') {
     console.log(route.id);
     return (<Map navigator={this.props.navigator} route={route} />)
   }
}
  render() {
    return (
      <Navigator
            initialRoute={{ id: 'Login' }}
            renderScene={this.renderScene}
        />
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('event', () => event);
