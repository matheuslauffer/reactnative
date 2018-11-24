import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import OutrosJogos from './components/OutrosJogos';
import Principal from './components/Principal';
import Resultado from './components/Resultado';

const Rotas = () => (
    <Router>
        <Stack key='root'>
          <Scene key='principal' component={Principal} initil title='Cara ou Coroa' />
          <Scene key='outrosJogos' component={OutrosJogos} title='Outros Jogos' />
          <Scene key='resultado' component={Resultado} title='Resultado' />
        </Stack>
      </Router>
);

export default Rotas;
