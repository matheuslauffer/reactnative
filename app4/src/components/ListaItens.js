import React, { Component } from 'react';
import Axios from 'axios';
import { ScrollView } from 'react-native';

import Itens from './Itens';

export default class ListaItens extends Component {
    constructor(props) {
        super(props);
        this.state = { listaItens: [] };
      }
      componentWillMount() {
        Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
          .then(response => { this.setState({ listaItens: response.data }); })
          .catch(() => { console.log('erro'); });
      }
      render() {
        return (
          <ScrollView>
            { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
          </ScrollView>
        );
      }
}
