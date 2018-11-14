import React, { Component } from 'react';
import Axios from 'axios';

import ListaItens from './src/components/ListaItens';

export default class App extends Component {
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
      <ListaItens />
    );
  }
}
