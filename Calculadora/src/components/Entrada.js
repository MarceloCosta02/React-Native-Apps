import React from 'react';
import { StyleSheet, View } from 'react-native';
import Numero from './Numero';

export default props => (   // os componentes Numero recebem props.num1/2 do painel
    <View style = { styles.numeros }> 
        <Numero num={ props.num1 } atualizaValor = { props.atualizaValor } nome = 'num1' /> 
        <Numero num={ props.num2 } atualizaValor = { props.atualizaValor } nome = 'num2' />
    </View>
);

const styles = StyleSheet.create({
    numeros:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
