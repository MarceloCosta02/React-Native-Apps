import React from 'react'
import Visor from './Visor';

// Usando arrow function
// Quando a unica coisa que faz é o return, pode-se omitir as chaves e a palavra return
// Quando a function tem 1 parametro só, pode-se omitir os parentesis dos parametros
const Resultado = props => (
    <Visor resultado = { props.resultado } />
);

export { Resultado };


