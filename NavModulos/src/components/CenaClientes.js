import React, { Component } from 'react';
import { 
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet    
 } from 'react-native';

 import BarraNavegacao from './BarraNavegacao';
 
 const detalheClientes = require('../img/detalhe_cliente.png');
 const cliente1 = require('../img/cliente1.png');
 const cliente2 = require('../img/cliente2.png');

export default class CenaClientes extends Component {
  render(){
    return(
        <View style = {{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar
          backgroundColor= '#B9C941'
          // hidden = { false } // true ou false - esconder a barra
                                        // recebe o objeto navigator do App.js e cria a props
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#B9C941'/> 

        <View style ={ styles.cabecalho }>
            <Image  source={detalheClientes}/>   
            <Text style ={ styles.txtTitulo }>Nossos Clientes</Text>
        </View>
        
        <View style = { styles.detalheCliente }>
          <Image  source={cliente1}/>
          <Text style ={ styles.txtDetalheCliente }>Lorem ipsum dolorem</Text>         
        </View>

        <View style = { styles.detalheCliente }>
          <Image  source={cliente2}/>
          <Text style ={ styles.txtDetalheCliente }>Lorem ipsum dolorem</Text>          
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
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente:{
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente:{
        fontSize: 18,
        marginLeft: 20
    }  
});


