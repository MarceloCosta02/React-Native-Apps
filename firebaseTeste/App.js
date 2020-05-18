import firebase from 'firebase';
import React, { Component } from 'react';
import {  View,  Text, Button } from 'react-native';

class firebaseTeste extends Component{

  /*constructor(props){
    super(props);

    this.state = {pontuacao:0}
  }*/

  //método de ciclo de vida - é chamado antes da renderização
  UNSAFE_componentWillMount(){
    var firebaseConfig = {
    apiKey: "AIzaSyA_i2sCsmtx_SM1_HWKChgiJQBLwuUoEoQ",
    authDomain: "testefirebase-95df1.firebaseapp.com",
    databaseURL: "https://testefirebase-95df1.firebaseio.com",
    projectId: "testefirebase-95df1",
    storageBucket: "testefirebase-95df1.appspot.com",
    messagingSenderId: "374928886725",
    appId: "1:374928886725:web:b2732358121641227259ac",
    measurementId: "G-W19LW8FP1V"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
  }


  cadastrarUsuario(){
    var email = "marcelo_costa02@outlook.com"
    var senha = "ibirapuera279"

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email, senha
    ).catch(
      (erro) => {
        var mensagemErro = "";
        if (erro.code == "auth/weak-password"){
          mensagemErro = "A senha precisa ter no mínimo 6 caracteres";
          alert( mensagemErro );
        }
        else{
          alert( erro.message );
        }        
      }
    )
  }


  verificarUsuarioLogado(){

    const usuario = firebase.auth();
    
    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if( usuarioAtual ){
          alert( "logado");
        }else{
          alert( "Usuario nao esta logado" );
        }
      }
    );       

  }

  deslogarUsuario(){
    const usuario = firebase.auth();

    usuario.signOut();
  }

  logarUsuario(){
    var email = "marcelo_costa02@outlook.com"
    var senha = "ibirapuera279"

    const usuario = firebase.auth();
    
    usuario.signInWithEmailAndPassword(
       email,
       senha      
    ).catch(
      (erro) => {
      alert(erro.message)
      }
    );
  }

  /*salvarDados(){
    var funcionarios = firebase.database().ref("funcionarios");
    
    // define um filho para o nó de referencia
    //funcionarios.child("001").child("nome").set("Marcelo");

    // O push gera automaticamente um identificador
    //funcionarios.push().child("nome").set("Jamilton")

    // pode-se inserir dados via objeto literal também
    funcionarios.push().set(
      {
        nome: "Ma",
        altura: "1,85"
      }
    )
  }

  listarDados(){

      var pontuacao = firebase.database().ref("pontuacao");
      pontuacao.on('value', (snapshot) => {
        
        var pontos = snapshot.val();
        this.setState( { pontuacao: pontos} )
        //alert(snapshot.val() );
      } ); // adicionar um ouvinte para o pontuacao, quando houver alguma alteração o firebase manda
  }*/


  render(){

    //let {pontuacao} = this.state;

    return(     
      <View>
        <Button 
        onPress = { () => { this.cadastrarUsuario(); } }
        title = "Cadastrar Usuario"
        color = "#841584"
        accessibilityLabel = "Cadastrar Usuario"
        />

        <Button 
          onPress = { () => { this.verificarUsuarioLogado(); } }
          title = "Verificar usuario logado"
          color = "#841584"
          accessibilityLabel = "Verificar usuario logado"
        />

        <Button 
          onPress = { () => { this.deslogarUsuario(); } }
          title = "Deslogar usuario"
          color = "#841584"
          accessibilityLabel = "Deslogar usuario"
        />
        <Button 
          onPress = { () => { this.logarUsuario(); } }
          title = "Logar usuario"
          color = "#841584"
          accessibilityLabel = "Logar usuario"
        />
        
        
      </View>

      //<Text>{pontuacao}</Text> Colocar dentro da view para funcionar
    )
  }
}  

export default firebaseTeste;

/*
<Button 
onPress = { () => { this.salvarDados(); } }
title = "Salvar Dados"
color = "#841584"
accessibilityLabel = "Salvar dados"
/>

<Button 
  onPress = { () => { this.listarDados(); } }
  title = "Listar Dados"
  color = "#841584"
  accessibilityLabel = "Listar Dados"
        />
*/

/* EXEMPLO 

salvarDados(){
    var database = firebase.database();
    database.ref("pontuacao").set("200"); // define o nó inicial que irá salvar/atualizar dados
    database.ref("pontuacao").remove(); // remove os dados

  }
*/