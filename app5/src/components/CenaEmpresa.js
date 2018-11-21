import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { BarraNavegacao } from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export class CenaEmpresa extends Component {
    render() {
        return (
            <View style={ styles.principal }> 
                <StatusBar backgroundColor = '#CCC' />
                <BarraNavegacao voltar navigator={this.props.navigator} />
                <View style={styles.titulo}>
                    <Image source={detalheEmpresa} />  
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>
                <View style={styles.empresa}>
                    <Text style={styles.txtDetalhe}>Lorem ipsum</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        color: '#EC7148',
        marginLeft: 10,
        fontSize: 30,
        marginTop: 25
    },
    empresa: {
        padding:20,
        marginTop: 20
    },
    txtDetalhe: {
        fontSize: 18,
        marginLeft: 20
    },
    principal: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});