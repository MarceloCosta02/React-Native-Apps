import React, { Component } from 'react';
import { Navigator }  from 'react-native-deprecated-custom-components';

import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';


export default class App extends Component {
  render(){
    return(
        <Navigator
          initialRoute={{ id: 'a' }} // rota inicial a ser renderizada
          renderScene={(route, navigator) => {
            if(route.id === 'a'){
              // exibir a cenaPrincipal
              return(<CenaPrincipal navigator={navigator}/>);
            }
            if(route.id === 'cliente'){
              // exibir a cenaCliente
              return(<CenaClientes navigator={navigator}/>); // encaminha o objeto navigator para CenaClientes
            }
            if(route.id === 'contato'){
              // exibir a cenaContato
              return(<CenaContatos navigator={navigator}/>); // encaminha o objeto navigator para CenaContato
            }
            if(route.id === 'empresa'){
              // exibir a cenaEmpresa
              return(<CenaEmpresa navigator={navigator}/>); // encaminha o objeto navigator para CenaEmpresa
            }
            if(route.id === 'servicos'){
              // exibir a cenaServicos
              return(<CenaServicos navigator={navigator}/>); // encaminha o objeto navigator para CenaServicos
            }
          }}
        />
    );
  }
}

