import React, { Component } from 'react';
import {  
  StyleSheet,
  Image,
  View,
  TouchableHighlight  
} from 'react-native';

import { Actions } from 'react-native-router-flux'

const logo = require('../img/logo.png');
const btnJogar = require('../img/botao_jogar.png')
const btnSobreJogo = require('../img/sobre_jogo.png');
const btnOutrosJogos = require('../img/outros_jogos.png')

export default class Principal extends Component {
  render(){
    return (
      <View style={styles.cenaPrincipal}>

        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />
             <TouchableHighlight 
             onPress={() => { Actions.resultado() }} 
             underlayColor={'61BD8C'}
             activeOpacity={0.3}
             >  
                <Image source={btnJogar} />
             </TouchableHighlight>          
        </View>

        <View style={styles.rodape}>
            <TouchableHighlight 
            onPress={() => { Actions.sobrejogo() }}
            underlayColor={'61BD8C'}
            activeOpacity={0.3}            
            >
                 <Image source={btnSobreJogo} />
            </TouchableHighlight>  

            <TouchableHighlight 
            onPress={() => { Actions.outrosjogos() }}
            underlayColor={'61BD8C'}
            activeOpacity={0.3}
             >
                 <Image source={btnOutrosJogos} />
            </TouchableHighlight>                                   
        </View>

      </View>
    );
  }
} 


const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

