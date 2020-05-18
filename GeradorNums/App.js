import React from 'react';
import {  Text, Button, View } from 'react-native';

const geraNumeroAleatorio = () => {
  var num_aleatorio = Math.random();

  num_aleatorio = Math.floor(num_aleatorio * 10);
  alert(num_aleatorio);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de Numeros Randomicos</Text>
      <Button
        title="Gerar um numero Randomico"
        onPress={ geraNumeroAleatorio }
      />
    </View>
  );
};

export default App;
