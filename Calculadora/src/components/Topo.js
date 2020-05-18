import React from 'react'
import { View, Text } from 'react-native'
import Cabecalho from './Cabecalho';

// Usando arrow function
// Quando a unica coisa que faz é o return, pode-se omitir as chaves e a palavra return
// Quando a function tem 1 parametro só, pode-se omitir os parentesis dos parametros
const Topo = props => (
    <Cabecalho />    
);

export { Topo };

