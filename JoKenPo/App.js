import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class App extends Component {

  // Quando o app for renderizado a variavel de escolha começa vazia
  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaDoUsuario) {
    //Gerando numero aleatorio(0, 1 ou 2)
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaDoComputador = '';

    switch (numAleatorio) {
      case 0: escolhaDoComputador = 'pedra'; break;
      case 1: escolhaDoComputador = 'papel'; break;
      case 2: escolhaDoComputador = 'tesoura'; break;
      default: escolhaDoComputador = '';
    } 

    let resultado = '';

    if (escolhaDoComputador == 'pedra') {
      if (escolhaDoUsuario == 'pedra') {
        resultado = 'Empate';
      }
      else if (escolhaDoUsuario == 'papel') {
        resultado = 'Você Ganhou';
      }
      else {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaDoComputador == 'papel') {
      if (escolhaDoUsuario == 'papel') {
        resultado = 'Empate';
      }
      else if (escolhaDoUsuario == 'tesoura') {
        resultado = 'Você Ganhou';
      }
      else {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaDoComputador == 'tesoura') {
      if (escolhaDoUsuario == 'tesoura') {
        resultado = 'Empate';
      }
      else if (escolhaDoUsuario == 'pedra') {
        resultado = 'Você Ganhou';
      }
      else {
        resultado = 'Você Perdeu';
      }
    }

    this.setState({ escolhaUsuario: escolhaDoUsuario, escolhaComputador: escolhaDoComputador, resultado: resultado });

  }

  render() {
    return ( 
      <View> 

        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress= {() => { this.jokenpo('pedra') }}/> 
          </View>           
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress= {() => { this.jokenpo('papel') }}/>
          </View>
          <View style={styles.btnEscolha}> 
            <Button title="tesoura" onPress= {() => { this.jokenpo('tesoura') }}/>
          </View>
         </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}> {this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>             
    
      </View>
                                // Na função onPress={() => {this.jokenpo('tesoura')}}
                                // É preciso encapsular {() => {this.NOMEDAFUNCAO()}}
                                // Para quando o app ser executado nao executar a funcao de uma vez                    
    );
  }  
};


const styles = StyleSheet.create({
  btnEscolha:{
    width: 90,
    marginTop: 10
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco:{
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  } 
});

export default App;
 