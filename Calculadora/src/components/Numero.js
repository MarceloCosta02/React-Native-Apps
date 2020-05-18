import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (  
                // recebe via props da entrada
    <TextInput 
        style = { styles.numero } 
        value={ props.num }
        onChangeText = { valordoCampo => props.atualizaValor(props.nome, valordoCampo) } // Verifica uma açao do conteudo do campo
    >        
    </TextInput>
)

const styles = StyleSheet.create({
    numero:{
        width: 140,
        height: 80,
        fontSize: 20,
        borderColor: 'gray',
        borderBottomWidth: 1,
    }
});
