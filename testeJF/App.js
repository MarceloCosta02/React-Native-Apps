import React, { useState, useEffect } from 'react';
//import Modal from "react-native-modal";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import api from './src/services/api'

export default function App() {
  
  //const [usuarios, setUsuarios] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')
  
  state = {
    data: ''
  } 
  
  /*useEffect(() => {
    async function buscaInfos() {

      const response = await api.get('/api/user/get/2')
      setUsuarios(response.data)
      console.log(response.data)
    }
    buscaInfos();    
  }, [])*/

  function limparCampos(){
    setNome('');
    setSenha('');
    setEmail('');
  }

  async function criaUsuario() {

    var num_aleatorio = Math.random();

    num_aleatorio = Math.floor(num_aleatorio * 10000);
    
    try {


      const response = await api.post('/api/user/create', { name: nome, password: senha, tokenPush: num_aleatorio  })
      console.log(response.data.data.id);
      alert('Usuario ' + response.data.data.name + ' foi criado com sucesso')

      limparCampos();

    } catch (error) {
      console.log(error.data);
      alert(error.data.ERRO)

      limparCampos();
    }
    
    //console.log(response)
   }    

    return(
      <KeyboardAvoidingView style={styles.container}
        behavior="padding" // Para não deixar o teclado por cima do login
        enabled={Platform.OS === 'ios'} // Usar somente no ios
      >
      
        <TextInput
          autoCapitalize='none' // primeira letra digitada pelo teclado é minuscula
          placeholder='Nome'
          placeholderTextColor='#999'
          style={styles.input}
          value={nome} 
          onChangeText={setNome} 
        />

        <TextInput
          autoCapitalize='none' // primeira letra digitada pelo teclado é minuscula
          placeholder='Email'
          placeholderTextColor='#999'
          style={styles.input}
          value={email} 
          onChangeText={setEmail} 
        />
        
        <TextInput
          autoCapitalize='none' 
          placeholder='Senha'
          placeholderTextColor='#999'
          secureTextEntry={true}
          style={styles.input}
          value={senha} 
          onChangeText={setSenha} 
        />
        

        <TouchableOpacity
            onPress={criaUsuario}
            style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    )

    /*

        <Text> Id: {usuarios.data.id} </Text>
        <Text> Usuario: {usuarios.data.name} </Text>
        <Text> Senha: {usuarios.data.password} </Text>
        <Text> Data de Exclusao: {usuarios.data.exclusionDate} </Text>
        <Text> Data de Criacao: {usuarios.data.creationDate} </Text>   

    */

}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center', // Alinha verticalmente
    alignItems: 'center', // Alinha horizontalmente
    padding: 30 // Para que todo conteudo dentro desse container, fica 30px de distancia das bordas
  },
  input: {
    height: 46,
    alignSelf: 'stretch', 
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
    marginLeft: 30,
    marginRight: 30     
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#85A4D2',
    color: '#FFF',
    borderRadius: 4,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30      
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});


