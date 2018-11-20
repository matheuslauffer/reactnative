import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export class BarraNavegacao extends Component {
    render() {
        if(this.props.voltar === true){
            return (
                <View style={styles.barraTitulo}>
                    <TouchableHighlight onPress={() => { this.props.navigator.pop(); }}>
                        <Image source={btnVoltar}/>
                    </TouchableHighlight>
                    <Text style={styles.titulo}>ATM consultoria</Text>
                </View>
            )
        }else{
            return (
                <View style={styles.barraTitulo}>
                    <Text style={styles.titulo}>ATM consultoria</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
})