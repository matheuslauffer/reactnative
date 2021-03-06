import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, StatusBar, TouchableHighlight } from 'react-native';
import { BarraNavegacao } from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export class CenaPrincipal extends Component {
    render() {
        return (
            <View style={ styles.principal }> 
                <StatusBar backgroundColor = '#CCC' />
                <BarraNavegacao />
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight 
                            onPress={() => { this.props.navigator.push({ id: 'b'}); }}
                            underlayColor={'#b9c941'}
                            activeOpacity={0.3}
                        >
                            <Image style={styles.imgMenu} source={menuCliente} />
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => { this.props.navigator.push({ id: 'c'}); }}
                            underlayColor={'#b9c941'}
                            activeOpacity={0.3}
                        >
                            <Image style={styles.imgMenu} source={menuContato} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight 
                            onPress={() => { this.props.navigator.push({ id: 'd' }); }}
                            underlayColor={'#b9c941'}
                            activeOpacity={0.3}
                        >
                            <Image style={styles.imgMenu} source={menuEmpresa} />
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => { this.props.navigator.push({ id: 'e' });}}
                            underlayColor={'#b9c941'}
                            activeOpacity={0.3}
                        >
                            <Image style={styles.imgMenu} source={menuServico} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    },
    principal: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})