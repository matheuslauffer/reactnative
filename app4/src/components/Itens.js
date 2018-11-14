import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Itens extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.detalhesItens}>
          <Text style={styles.titulo}>this.props.item.titulo</Text>
          <Text style={styles.valor}>R$ this.props.item.valor</Text>
          <Text style={styles.detalhes}>local: this.props.item.local_anuncio</Text>
          <Text>Dt publicação: this.props.item.data_publicacao</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '##999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhesItens: {
    marginLeft: 20,
    flex: 1
  },
  titulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detalhes: {
    fontSize: 16
  }
});
