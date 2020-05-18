import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'; 

import ListaItens from './src/components/ListaItens'

class App extends Component {
  render(){
    return (
      <View>
        <Text style = { styles.titulo}>CATÁLOGO DE ITENS</Text> 
        <ListaItens />
      </View>      
    );
  }
};

const styles = StyleSheet.create({
  titulo:{
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: "center",
      paddingTop: 10,
      paddingBottom: 10  
  }
});

export default App;

