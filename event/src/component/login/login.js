import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './loginForm';
 class Login extends Component {
   constructor(props){
     super(props);
     console.log(this.props.navigator) // it should be passing to here now
   }
  render() {
    return (
      <KeyboardAvoidingView behavior = "padding" style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style = {styles.logo}
          source = {require('../../images/77.png')}
          />
        <Text style = {styles.title}>
          EVENTOPIA
        </Text>
      </View>
      <View style={styles.form}>
        <LoginForm navigator={this.props.navigator}></LoginForm>
      </View>
      </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#349ADB',
  },
    logoContainer: {
     alignItems : 'center',
    flexGrow : 1,
      justifyContent : 'center', 
      
  },
      logo: {
        width: 100,
        height: 100,
  },
  title:{
    color:'#ffffff',
    textAlign:'center',
    opacity:.9
  }
});
export default Login
