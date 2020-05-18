import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // Importa o roteamento para browser que cria a estutura por / no site

// Importando as páginas da app
import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes(){
    return(        
         /* o Route path="" significa que o login só é acessivel quando o usuário esta na raiz da app */
        <BrowserRouter>            
             <Route path="/" exact={true} component={Login} /> 
             <Route path="/dev/:id" component={Main} /> 
        </BrowserRouter>
        /* o /dev recebe um parametro, que vem do login */
    );
    // Precisa ter um Route para cada página da aplicação
}