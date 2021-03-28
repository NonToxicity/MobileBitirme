import * as React from 'react';
import {View, Text} from 'react-native';

import{headerStyles as styles} from './styles';

class Header extends React.Component{
  render(){
    return(
      <View style={styles.container}>
         <Text style={styles.Thetitel}>WhatIf World</Text>
        <Text style={styles.subtitle}>Select the country that you want to learn Corona information</Text>
        <View style={styles.line}/>
        <Text style={styles.title}>COUNTRIES</Text>
      </View>
    );
  }
}
export default Header;
