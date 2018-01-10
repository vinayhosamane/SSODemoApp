import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
  } from 'react-native';

  import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

  GoogleSignin.configure({
    iosClientId: '339198048673-5mhhdtdpmut7end9m87l3vrpse489p4i.apps.googleusercontent.com', // only for iOS
  })
  .then(() => {
    // you can now call currentUserAsync()
  });
 
  const GoogleApp = ({onPress}) => {
   return(
       <TouchableHighlight style={googleStyles.googlecontainer} onPress={onPress}> 
       <Image source={require('./img/Google-icon.png')} style={{width:48,height:48}} />
       </TouchableHighlight>
   );
  }

  const googleStyles = StyleSheet.create({
    googlecontainer:{
    alignItems:'center',
    justifyContent:'center',
    width:90,
    height:90,
    },
  });

  export {GoogleApp};
