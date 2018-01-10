/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import {FacebookApp} from './LoginProviders/Facebook.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

GoogleSignin.configure({
  iosClientId: '339198048673-5mhhdtdpmut7end9m87l3vrpse489p4i.apps.googleusercontent.com', // only for iOS
})
.then(() => {
  // you can now call currentUserAsync()
});

export default class App extends Component {


  constructor(props){
    super(props);

    this.signIn = this.signIn.bind(this);
    this.fbPress = this.fbPress.bind(this);
  }

  componentDidMount(){
    
  }

  signIn(){
    console.log("Signed in");
    const user = GoogleSignin.currentUser();

    if(user!=null){
      GoogleSignin.signOut()
      .then(() => {
        console.log('out');
      })
      .catch((err) => {
      
      });
    }

      GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({user: user});
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
    
    
  }

  fbPress(){
    console.log('fbPressed');
    FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Web); // defaults to Native
    
    FBLoginManager.loginWithPermissions(["email","user_friends","public_profile"], function(error, data){
      if (!error) {
        console.log("Login data: ", data);
      } else {
        console.log("Error: ", error);
      }
    })
  }


  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.welcome}>Signin or Signup using </Text>

        <FacebookApp
        onPress ={this.fbPress}
         />
        {/* <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends","public_profile"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);

          

          //this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          console.log("Logged out.");
          //this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          //this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          //this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      /> */}
      <GoogleSigninButton
    style={{width: 48, height: 48}}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.signIn}/>
      </View>
    );
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
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
