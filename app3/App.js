/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.propriedade1}</Text>
        <Text>Segundo Parâmetro</Text>
      </View>
    );
  }
}

export default class App3 extends Component{
  render(){
    return(
      <MeuComponente propriedade1 = 'Banana'></MeuComponente>
    );
  }
}