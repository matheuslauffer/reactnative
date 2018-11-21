import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { BarraNavegacao } from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export class CenaContatos extends Component {
    render() {
        return (
            <View style={ styles.principal }>
                <StatusBar backgroundColor = '#CCC' />
                <BarraNavegacao voltar navigator={this.props.navigator} />
                <View style={styles.titulo}>
                    <Image source={detalheContatos} />  
                    <Text style={styles.txtTitulo}>Contatos</Text>
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
        color: '#61BD8C',
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