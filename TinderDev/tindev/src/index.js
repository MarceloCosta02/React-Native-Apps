import React from 'react';
import Routes from './pages/routes';
import{ YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]); // ignora os erros amarelos

export default function app(){
  return(   
    <Routes />
  );
}
