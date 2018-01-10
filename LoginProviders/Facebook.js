import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity
  } from 'react-native';

  var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

 
  const FacebookApp = ({onPress}) => {
   return(
       <TouchableOpacity style={facebookStyles.fbcontainer} onPress={onPress}> 
       <Image source={require('./img/facebook-icon.jpg')} style={{width:48,height:48}} />
       </TouchableOpacity>
   );
  }

  const facebookStyles = StyleSheet.create({
    fbcontainer:{
    alignItems:'center',
    justifyContent:'center',
    width:90,
    height:90,
    },
  });

  export {FacebookApp};
