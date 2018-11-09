/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Topo } from './src/components/topo';
import { Icone } from './src/components/icone';


export default class App3 extends Component {
  constructor(props){
    super(props);
    this.state = { escolhaUsuario : '', escolhaComputador : '', resultado : '' }
  }

  jokenpo(escolhaUsuario){
    var numAleatorio = Math.floor(Math.random()*3);
    var escolhaComputador = '';
    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }
    var resultado = '';
    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra')
        resultado = 'Empate';
      else if(escolhaUsuario == 'papel')
        resultado = 'Você ganhou';
      else
        resultado = 'Você perdeu';
    }else if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'pedra')
        resultado = 'Você prdeu';
      else if(escolhaUsuario == 'papel')
        resultado = 'Empate';
      else
        resultado = 'Você ganhou';
    }else{
      if(escolhaUsuario == 'pedra')
        resultado = 'Você ganhou';
      else if(escolhaUsuario == 'papel')
        resultado = 'Você perdeu';
      else
        resultado = 'Empate';
    }
    this.setState({escolhaUsuario : escolhaUsuario, escolhaComputador : escolhaComputador, resultado : resultado});
  }

  render(){
    return(
      <View>
        <Topo></Topo>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='Pedra' onPress={() => {this.jokenpo('pedra')}}/>
          </View>
          <View style={styles.btnEscolha}>
            <Button title='Papel' onPress={() => {this.jokenpo('papel')}}/>
          </View>
          <View style={styles.btnEscolha}>
            <Button title='Tesoura' onPress={() => {this.jokenpo('tesoura')}}/>
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='usuario'></Icone>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha : {
    width : 90
  },
  painelAcoes : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    margin : 10
  },
  palco : {
    alignItems : 'center',
    marginTop : 10
  },
  txtResultado : {
    fontSize : 25,
    fontWeight : "bold",
    color : 'red',
    height : 60
  }
});