import { createAppContainer, createSwitchNavigator } from 'react-navigation'; 

import Login from '../pages/Login';
import Main from '../pages/Main';

export default createAppContainer( // Precisa ficar por volta de toda a navegação da app
    createSwitchNavigator({ // Cria uma navegação entre duas telas sem qualquer tipo de feedback visual
        Login,
        Main
    })
);