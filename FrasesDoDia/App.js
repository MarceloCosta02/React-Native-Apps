// Importações
import React from 'react';
import {  Text, Button, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  botao:{
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = 'Escolher o seu tempo é ganhar tempo';
  frases[1] = 'O medo de perder tira a vontade de ganhar';
  frases[2] = 'A avareza perde tudo ao pretender ganhar tudo';
  frases[3] = 'Quem sabe o que se pode ganhar num dia jamais furta';
  frases[4] = 'Perder para a razão, sempre é ganhar';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);

}

// Criar o componente
const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return (   
    <View style = { principal }> 

      <Image source = { require('./img/logo.png')} />

      <TouchableOpacity 
        onPress={ gerarNovaFrase }
        style={ botao }>

        <Text style={ textoBotao }>Nova Frase</Text>

      </TouchableOpacity>

    </View>
  );
};

// Exportar App
export default App;


// Formatações 
/* const Estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B',
    height: 60, // Altura
    width: 60 // Largura 

    //flex: 1, // Define a proporção que o componente vai se manter na tela
    //margin: 30, // Espaçamento fora do elemento
    //color: '#fff',
    //fontStyle: 'italic',
    //fontWeight: 'bold',
    //textAlign: 'center',
    //padding: 40 // Espaçamento dentro do elemento     
  },
  estiloView:{
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center', // Alinha o conteudo na vertical
    alignItems: 'center', // Alinha o conteudo na hotizontal
    flexDirection: 'row' // Direção do alinhamento dos componentes
  }
};

 <Button
        onPress={botaoPressionado}
        title="Clique Aqui"
        color="#841584"
        accessibilityLabel="Clique para abrir as noticias!!"// Informações de acessibilidade
      />

*/

/*

Botao customizado

const Estilos = {
  principal: {
    paddingTop: 500
  },
  botao:{
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1, // Espessura da borda
    borderRadius: 8, // Arredondamento do botao
    marginLeft: 30,
    marginRight: 30
  },
  textoBotao:{
    color:'#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center' // Alinhamento para o próprio componente
  }
};


*/