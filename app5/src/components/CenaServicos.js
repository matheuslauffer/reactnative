import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { BarraNavegacao } from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');

export class CenaServicos extends Component {
    render() {
        return (
            <View style={ styles.principal }> 
                <StatusBar backgroundColor = '#CCC' />
                <BarraNavegacao voltar navigator={this.props.navigator} />
                <View style={styles.titulo}>
                    <Image source={detalheServicos} />  
                    <Text style={styles.txtTitulo}>Nossos Serviços</Text>
                </View>
                <View style={styles.contatos}>
                    <Text style={styles.txtDetalhe}>TEL: </Text>
                    <Text style={styles.txtDetalhe}>Celular:</Text>
                    <Text style={styles.txtDetalhe}>E-mail: </Text>
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
        color: '#19D1C8',
        marginLeft: 10,
        fontSize: 30,
        marginTop: 25
    },
    contatos: {
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