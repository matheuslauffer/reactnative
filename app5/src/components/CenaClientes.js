import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { BarraNavegacao } from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export class CenaClientes extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor = '#CCC' />
                <BarraNavegacao voltar navigator={this.props.navigator} />
                <View style={styles.titulo}>
                    <Image source={detalheCliente} />  
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>
                <View style={styles.clientes}>
                    <Image source={cliente1} />
                    <Text style={styles.txtDetalhe}>Lorem ipsum</Text>
                </View>
                <View style={styles.clientes}>
                    <Image source={cliente2} />
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
        color: '#B9C941',
        marginLeft: 10,
        fontSize: 30,
        marginTop: 25
    },
    clientes: {
        padding:20,
        marginTop: 10
    },
    txtDetalhe: {
        fontSize: 18,
        marginLeft: 20
    }
});