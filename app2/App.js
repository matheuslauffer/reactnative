/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image, Alert} from 'react-native';

type Props = {};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.floor(Math.random() * 5);

  var frases = Array();
  frases[0] = 'aa';
  frases[1] = 'ac';
  frases[2] = 'av';
  frases[3] = 'ab';
  frases[4] = 'as';
  Alert.alert(frases[numeroAleatorio]);
}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.principal}>
        <Image source={require('./imgs/logo.png')}/>
        <TouchableOpacity 
          style={styles.botao}
          onPress={gerarNovaFrase}
        >
          <Text style={styles.textoBotao}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal : {
    flex: 1,
    justifyContent: "center",
    alignItems : "center"
  },
  botao: {
    backgroundColor : "#538530",
    paddingVertical : 10,
    paddingHorizontal : 40,
    marginTop : 20
  },
  textoBotao: {
    color : "#FFF",
    fontSize : 16,
    fontWeight : "bold"
  }
});
