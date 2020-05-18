import React, { Component } from 'react';
import { 
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet    
 } from 'react-native';

import BarraNavegacao from './BarraNavegacao';
 
const detalheContatos = require('../img/detalhe_contato.png');

export default class CenaContatos extends Component {
  render(){
    return(
        <View style = {{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar
          backgroundColor= '#61BD8C'
          // hidden = { false } // true ou false - esconder a barra
                                        // recebe o objeto navigator do App.js e cria a props
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C'/> 

        <View style ={ styles.cabecalho }>
            <Image  source={detalheContatos}/>   
            <Text style ={ styles.txtTitulo }>Contatos</Text>
        </View>
        
        <View style = { styles.detalheContatos }>
            <Text style = { styles.txtContatos }>TEL (11) 1234-1234</Text>
            <Text style = { styles.txtContatos }>CEL (11) 91234-1234</Text>
            <Text style = { styles.txtContatos }>EMAIL: contato@atmconsultoria.com</Text>
        </View>
                           
               
      </View>    
    );
  }
}

const styles = StyleSheet.create({
    
    cabecalho:{
        marginTop: 20,
        flexDirection: 'row'
    },
    txtTitulo:{
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos:{
        marginTop: 20,
        padding: 20
    },
    txtContatos:{
        fontSize: 18
    }  
});


