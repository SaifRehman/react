import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Navigator
} from 'react-native';
import Map from '../map/map';

class LoginForm extends Component {
  constructor(props) {
    super(props);
     console.log("navigator");
    console.log(props.navigator)
    this.onButtonPress = this.onButtonPress.bind(this);
}
  onButtonPress () {
  this.props.navigator.push({
    id:'Map'
  });
};

  render() {
    return (
      
      <View style={styles.container}>
        <TextInput
          style = {styles.login}
          placeholder = "Username"
          returnKeyType = "next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}>
        </TextInput>
         <TextInput style = {styles.login} placeholder = "Password" secureTextEntry returnKeyType="go" ref={(input)  => this.passwordInput = input}></TextInput>
          <TouchableOpacity onPress={this.onButtonPress.bind(this)}  navigator={navigator}  style={styles.button}><Text style={styles.buttonText}>LOGIN</Text></TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  login:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.8)',
    marginBottom:10,
    color:"#fff",
    paddingHorizontal:10
  },
  button:{
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom:10,
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'700'
  }
});
export default LoginForm
