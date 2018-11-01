/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

type Props = {};

const botaoPressioando = () => {
  alert("APERTOU");
}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.principal}>
        <TouchableOpacity style={styles.botao} onPress={botaoPressioando}>
          <Text style={styles.textoBotao}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal : {
    paddingTop : 40,
  },
  botao : {
    backgroundColor : '#fff',
    borderColor : '#48BBEC',
    borderWidth : 1,
    borderRadius : 8,
    shadowColor : '#000',
    shadowOffset : {width : 0, height: 2},
    shadowOpacity : 0.4
  },
  textoBotao : {
    color : '#48BBEC',
    fontSize : 16,
    fontWeight : 'bold',
    alignSelf : 'center'
  }
});
