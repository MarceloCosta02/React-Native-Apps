import React from 'react'
import { View } from 'react-native'

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

// Usando arrow function
// Quando a unica coisa que faz é o return, pode-se omitir as chaves e a palavra return
// Quando a function tem 1 parametro só, pode-se omitir os parentesis dos parametros

const Painel = props => (
    <View>
        <Entrada 
             num1={props.num1} 
             num2={props.num2} 
             atualizaValor = { props.atualizaValor }
        />

        <Operacao 
         operacao = { props.operacao }
         atualizaOperacao = { props.atualizaOperacao }
         />

        <Comando acao={ props.calcular } />   
     </View>
)
       
    
export { Painel };
