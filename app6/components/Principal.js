import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnjogar = require('../imgs/botao_jogar.png');
const btnSobre = require('../imgs/sobre_jogo.png');
const btnOutros = require('../imgs/outros_jogos.png');

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>
        <View style={styles.apresentacao}>
          <Image source={logo} />
          <TouchableHighlight onPress={() => { Actions.resultado(); }}>
            <Image source={btnjogar} />
          </TouchableHighlight>
        </View>
        <View style={styles.rodape}>
          <Image source={btnSobre} />
          <TouchableHighlight onPress={() => { Actions.outrosJogos(); }}>
            <Image source={btnOutros} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresentacao: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
