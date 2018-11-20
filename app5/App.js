import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import { CenaClientes } from './src/components/CenaClientes';
import { CenaPrincipal } from './src/components/CenaPrincipal';

export default class App extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{id: 'a'}}
        renderScene={(route, navigator) => {
          if(route.id ==='a'){
            return(<CenaPrincipal navigator={navigator}/>);
          }
          if(route.id ==='b'){
            return(<CenaClientes navigator={navigator}/>)
          }
        }}
      />
    );
  }
}